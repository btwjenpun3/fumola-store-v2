<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Harga;
use App\Models\Invoice;
use App\Models\Payment;
use App\Models\XenditEWallet;
use App\Models\XenditOutlet;
use App\Models\XenditQr;
use App\Models\XenditVa;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TopupController extends Controller
{    
    public function generateCustomerNo($seller_name, $brand, $userId, $serverId, $userNickname)
    {
        if ($seller_name == 'BANGJEFF' && $brand == 'LifeAfter Credits') {
            $customer_no = $userId . ',' . $serverId;

        } elseif ($brand == 'Honkai Star Rail') {
            if($seller_name == 'HOPE') {
                $customer_no = $userId . '|' . $serverId;
            } elseif ($seller_name == 'VocaGame') {
                if($serverId == 'os_asia') {
                    $serverId = 'prod_official_asia';
                } elseif($serverId == 'os_usa') {
                    $serverId = 'prod_official_usa';
                } elseif($serverId == 'os_euro') {
                    $serverId = 'prod_official_eur';
                } else {
                    throw new \Exception('Produk ini dengan Server TW_HK_MO tidak support! Harap pilih denom yang lain');                         
                }
                $customer_no = $userId . '|' . $serverId;
            } elseif($seller_name == 'YinYangStoreid') {
                $customer_no = $userId . '|' . $serverId;
            } elseif($seller_name == 'LUQMANTRONIK') {
                $customer_no = $userId . $serverId;
            }                
        } elseif($brand == 'Genshin Impact') {    
            if($seller_name == 'HOPE') {
                $customer_no = $userId . '|' . $serverId;
            } elseif($seller_name == 'lapakgamingcom') {
                if($serverId == 'os_asia') {
                    $serverId = '001';
                } elseif($serverId == 'os_usa') {
                    $serverId = '002';
                } elseif($serverId == 'os_euro') {
                    $serverId = '003';
                } elseif($serverId == 'os_cht') {
                    $serverId = '004';
                } else {
                    throw new \Exception('error', 'Produk ini dengan Server TW_HK_MO tidak support! Harap pilih denom yang lain');                              
                }                
            } else {
                $customer_no = $serverId . $userId;
            }
            
        } elseif ($brand == 'Clash of Clans') {
            $customer_no = '#' . $userId;

        } elseif ($brand == 'Hay Day') {
            $customer_no = '#' . $userId;

        } elseif ($brand == 'League of Legends Wild Rift') {
            $customer_no = $userId . '#' . $userId;

        } elseif ($brand == 'Valorant') {
            $customer_no = $userId . '#' . $serverId; 
            
        } elseif ($brand == 'Tower of Fantasy') {
            $customer_no = $userId . ',' . $serverId; 
            
        } elseif ($brand == 'Ragnarok Origin') {
            if($seller_name == 'BANGJEFF') {
                $customer_no = $userId . ',' . $userNickname . ',' . $serverId;
            } else {
                throw new \Exception('error', 'Produk ini sedang Offline');                        
            }                   

        } elseif ($brand == 'One Punch Man') {
            if($seller_name == 'BANGJEFF') {
                $customer_no = $userId . ',' . $serverId; 
            } else {
                throw new \Exception('error', 'Produk ini sedang Offline');               
            }

        } else {
            $customer_no = $userId . $serverId;
        }

        return $customer_no;
    }

    public function webProcess($kode, $userId, $serverId, $price, $paymentMethod, $phone)
    {      
      
        $data = Harga::where('kode_produk', $kode)->first();

        $game = $data->game;    

        if (!$data || $data->status !== 1) {
            throw new \Exception('Denom ini sedang Offline');
        }

        if(!($data->start_cut_off == $data->end_cut_off)) {
            $waktuSekarang = Carbon::now();
            $mulaiCutOff = Carbon::parse($data->start_cut_off); 
            $selesaiCutOff = Carbon::parse($data->end_cut_off); 
            if($selesaiCutOff->lt($mulaiCutOff)) {
                $selesaiCutOff = Carbon::parse($data->end_cut_off)->addDay();
            } else {
                $selesaiCutOff = Carbon::parse($data->end_cut_off);
            }
            if ($waktuSekarang->between($mulaiCutOff, $selesaiCutOff)) {                        
                throw new \Exception('Produk ini sedang Offline hingga pukul ' . $data->end_cut_off . ' WIB');
            }
        } 

        $cekOffline = Http::withHeaders([
            'Content-Type' => 'application/json',
        ])->post('https://api.digiflazz.com/v1/price-list', [
            'cmd' => 'prepaid',
            'username' => env('DIGIFLAZZ_USERNAME'),
            'code' => $data->kode_produk,
            'sign' => md5(env('DIGIFLAZZ_USERNAME') . env('DIGIFLAZZ_SECRET_KEY') . 'pricelist')
        ]);     
                          
        if($cekOffline['data'][0]['seller_product_status'] == false) {                            
            $data->update([
                'status' => 3
            ]);                        
            throw new \Exception('Denom ini sedang Offline'); 
        }

        if($data->modal != $cekOffline['data'][0]['price']) {   
            $hargaModal = $cekOffline['data'][0]['price'];
            $data->update([
                'modal' => $cekOffline['data'][0]['price'],
                'profit' => $data->harga_jual - $cekOffline['data'][0]['price'],
                'profit_reseller' => $data->harga_jual_reseller - $cekOffline['data'][0]['price']
            ]);
            if($data->harga_jual < $cekOffline['data'][0]['price']) {
                $data->update([
                    'status' => 3
                ]);
                throw new \Exception('Denom ini sedang Offline'); 
            }                                     
        } else {
            $hargaModal = $data->modal;
        }

        $profit = $data->profit;
        $total = $price;

        $saldo = Http::withHeaders([
            'Content-Type' => 'application/json',
        ])->post('https://api.digiflazz.com/v1/cek-saldo', [
            'cmd' => 'deposit',
            'username' => env('DIGIFLAZZ_USERNAME'),
            'sign' => md5(env('DIGIFLAZZ_USERNAME') . env('DIGIFLAZZ_SECRET_KEY') . 'depo')
        ]);
        if($saldo['data']['deposit'] <= $data->modal) {                         
            throw new \Exception('Terdapat Error, Silahkan Hubungi Admin'); 
        } 

        $via = 'WEB';

        try {
            $customer_no = $this->generateCustomerNo($data->seller_name, $data->game->brand, $userId, $serverId, null);
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage()); 
        }        

        $datePart = now()->format('Ymd');
        $lastOrder = Invoice::orderby('id', 'desc')->first();
        $randNumber = rand(100,999);
        $sequenceNumber = $lastOrder ? sprintf('%05d', $lastOrder->id + 1) : '00001';
        $invoiceNumber = 'TRX' . $datePart . $randNumber . $sequenceNumber;

        $currentTime = now();
        $expiredTime = $currentTime->addHours(17);
        $expiredAt = $expiredTime->format('Y-m-d\TH:i:s.u\Z');

        $payment = Payment::where('payment_method', $paymentMethod)->first();
        if($payment->payment_type == 'EWALLET') {
            if($paymentMethod == 'ID_OVO') {
                if(strpos($phone, '0') === 0) {
                    $phoneNumber = '+62' . substr($phone, 1);
                } else if(strpos($phone, '62') === 0) {
                    $phoneNumber = '+' . $phone;
                }
                $response = Http::withHeaders([
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Basic ' . base64_encode(env('XENDIT_SECRET_KEY') . ':'),
                ])->post('https://api.xendit.co/ewallets/charges', [
                    'reference_id' => $invoiceNumber,
                    'currency' => 'IDR',
                    'amount' => $total,
                    'checkout_method' => 'ONE_TIME_PAYMENT',
                    'channel_code' => $paymentMethod,
                    'channel_properties' => [
                        'mobile_number' => $phoneNumber,
                    ],
                    'metadata' => [
                        'branch_area' => 'PLUIT',
                        'branch_city' => 'JAKARTA',
                    ],
                ]);
            } else {
                $response = Http::withHeaders([
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Basic ' . base64_encode(env('XENDIT_SECRET_KEY') . ':'),
                ])->post('https://api.xendit.co/ewallets/charges', [
                    'reference_id' => $invoiceNumber,
                    'currency' => 'IDR',
                    'amount' => $total,
                    'checkout_method' => 'ONE_TIME_PAYMENT',
                    'channel_code' => $paymentMethod,
                    'channel_properties' => [
                        'success_redirect_url' => route('invoice.index', ['id' => $invoiceNumber]),
                        'failure_redirect_url' => route('invoice.index', ['id' => $invoiceNumber]),
                    ],
                    'metadata' => [
                        'branch_area' => 'PLUIT',
                        'branch_city' => 'JAKARTA',
                    ],
                ]);
            }                           
            /**
             * Cek Methode pembayaran untuk di masukkan URL nya ke Invoice
             */            
            if($payment->payment_method == 'ID_SHOPEEPAY') {
                $invoice_url = $response['actions']['mobile_deeplink_checkout_url'];
            } elseif ($payment->payment_method == 'ID_DANA') {
                $invoice_url = $response['actions']['desktop_web_checkout_url'];
            } elseif ($payment->payment_method == 'ID_LINKAJA') {
                $invoice_url = $response['actions']['mobile_web_checkout_url'];
            } elseif ($payment->payment_method == 'ID_ASTRAPAY') {
                $invoice_url = $response['actions']['mobile_web_checkout_url'];
            } elseif ($payment->payment_method == 'ID_OVO') {
                $invoice_url = null;
            }   
            $eWalletCreate = XenditEWallet::create([
                'xendit_invoice_url' => $invoice_url
            ]);
            Invoice::create([                                                   
                'nomor_invoice' => $invoiceNumber,                                
                'user_id' => $userId,
                'server_id' => $serverId,
                'customer' => $customer_no,
                'phone' => $phone,
                'game_id' => $game->id,
                'harga_id' => $data->id, 
                'payment_id' => $payment->id,
                'xendit_invoice_id' => $response['id'],
                'xendit_e_wallet_id' => $eWalletCreate['id'],
                'modal' => $hargaModal,
                'profit' => $data->profit,
                'total' => $total,
                'status' => 'PENDING',      
                'via' => $via,                          
                'expired_at' => $expiredAt,
            ]);                                                       
            return (object)['success' => true, 'invoiceNumber' => $invoiceNumber];
        } elseif($payment->payment_type == 'QRIS') {
            $response = Http::withHeaders([
                'api-version' => '2022-07-31',
                'Content-Type' => 'application/json',
                'Authorization' => 'Basic ' . base64_encode(env('XENDIT_SECRET_KEY') . ':'),
            ])->post('https://api.xendit.co/qr_codes', [
                'reference_id' => $invoiceNumber,
                'type' => 'DYNAMIC',
                'currency' => 'IDR',
                'amount' => $total,
                'channel_code' => 'ID_DANA',
                'expires_at'=> $expiredAt
            ]);
            $QrCreate = XenditQr::create([
                'xendit_qr_string' => $response['qr_string']
            ]);
            Invoice::create([                                                   
                'nomor_invoice' => $invoiceNumber,                                
                'user_id' => $userId,
                'server_id' => $serverId,
                'customer' => $customer_no,
                'phone' => $phone,
                'game_id' => $game->id,
                'harga_id' => $data->id, 
                'payment_id' => $payment->id,
                'xendit_invoice_id' => $response['id'],
                'xendit_qr_id' => $QrCreate['id'],
                'modal' => $hargaModal,
                'profit' => $data->profit,
                'total' => $total,
                'status' => 'PENDING',
                'via' => $via,                                 
                'expired_at' => $expiredAt,
            ]);
            return (object)['success' => true, 'invoiceNumber' => $invoiceNumber];
        } elseif($payment->payment_type == 'VA') {
            if($data->harga_jual >= 10000) {
                $response = Http::withHeaders([
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Basic ' . base64_encode(env('XENDIT_SECRET_KEY') . ':'),
                ])->post('https://api.xendit.co/callback_virtual_accounts', [
                    'external_id' => $invoiceNumber,
                    'bank_code' => $paymentMethod,
                    'name' => 'Fumola Store',
                    'is_closed' => true,
                    'expected_amount' => $total,
                    'expiration_date' => $expiredAt
                ]);                                
                $VaCreate = XenditVa::create([
                    'xendit_va_name' => $response['name'],
                    'xendit_va_number' => $response['account_number']
                ]);
                Invoice::create([                                                   
                    'nomor_invoice' => $invoiceNumber,                                
                    'user_id' => $userId,
                    'server_id' => $serverId,
                    'customer' => $customer_no,
                    'phone' => $phone,
                    'game_id' => $game->id,
                    'harga_id' => $data->id, 
                    'payment_id' => $payment->id,
                    'xendit_invoice_id' => $response['id'],
                    'xendit_va_id' => $VaCreate['id'],
                    'modal' => $hargaModal,
                    'profit' => $data->profit,
                    'total' => $total,
                    'status' => 'PENDING', 
                    'via' => $via,                                
                    'expired_at' => $expiredAt,
                ]);
                return (object)['success' => true, 'invoiceNumber' => $invoiceNumber];
            } else {
                throw new \Exception('Harga Pembelian untuk Virtual Account Minimal Rp.10.000'); 
            }                                                       
        } else if($payment->payment_type == 'OUTLET') {
            if($data->harga_jual >= 10000) {
                $response = Http::withHeaders([
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Basic ' . base64_encode(env('XENDIT_SECRET_KEY') . ':'),
                ])->post('https://api.xendit.co/fixed_payment_code', [
                    'external_id' => $invoiceNumber,
                    'retail_outlet_name' => $paymentMethod,
                    'name' => 'Fumola Store',
                    'expected_amount' => $total,
                    'expiration_date' => $expiredAt
                ]); 
                $OutletCreate = XenditOutlet::create([
                    'prefix' => $response['prefix'],
                    'name' => $response['name'],
                    'payment_code' => $response['payment_code']
                ]);
                Invoice::create([                                                   
                    'nomor_invoice' => $invoiceNumber,                                
                    'user_id' => $userId,
                    'server_id' => $serverId,
                    'customer' => $customer_no,
                    'phone' => $phone,
                    'game_id' => $game->id,
                    'harga_id' => $data->id, 
                    'payment_id' => $payment->id,
                    'xendit_invoice_id' => $response['id'],
                    'xendit_outlet_id' => $OutletCreate['id'],
                    'modal' => $hargaModal,
                    'profit' => $data->profit,
                    'total' => $total,
                    'status' => 'PENDING', 
                    'via' => $via,                                
                    'expired_at' => $expiredAt,
                ]);
                return (object)['success' => true, 'invoiceNumber' => $invoiceNumber];
            } else {
                throw new \Exception('Harga Pembelian untuk Outlet Minimal Rp.10.000'); 
            }                             
        } else {
            throw new \Exception('Pembayaran Tidak di Temukan');   
        }                                                
    } 
}

<?php

namespace App\Jobs;

use App\Events\TopUpEvent;
use App\Events\TopUpEventFailed;
use App\Models\Harga;
use Carbon\Carbon;
use App\Models\Customer;
use App\Models\Invoice;
use App\Models\Digiflazz;
use Illuminate\Support\Facades\Log;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;

class TopUpRealmJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public $authId, $authUser, $userId, $serverId, $userNickname, $productCode, $password, $customerField;

    public function __construct($authId, $authUser, $password, $userId, $serverId, $userNickname, $productCode, $customerField)
    {
        $this->authId = $authId;
        $this->authUser = $authUser;
        $this->userId = $userId;
        $this->serverId = $serverId;
        $this->userNickname = $userNickname;
        $this->productCode = $productCode;
        $this->password = $password;
        $this->customerField = $customerField;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try { 
        $data = Harga::where('kode_produk', $this->productCode)->first();         
            if ($data && $data->status === 1) {                
                $user = $this->authUser;
                if(Hash::check($this->password, $user->password)) {                    
                    if($user->role->name == 'reseller') {
                        if($user->saldo <= $data->harga_jual_reseller ) {
                            event(new TopUpEventFailed($this->authId, 'Saldo Kamu Kurang! Harap Recharge Saldo Kamu Lagi!')); 
                            $this->delete(); 
                            return;
                        }
                    }                  
                    if(isset($this->customerField)) {
                        if(isset($this->serverId)) {
                            $customer_server = $this->serverId;
                        } else {
                            $customer_server = null;
                        }
                        if (isset($this->userNickname)) {
                            $customer_nickname = $this->userNickname;
                        } else {
                            $customer_nickname = null;
                        }
                        Customer::create([
                            'game_id' => $data->game->id,
                            'user_id' => $this->authId,
                            'name' => $this->customerField,
                            'user' => $this->userId,
                            'server' => $customer_server,
                            'nickname' => $customer_nickname
                        ]);                        
                    }   

                    if(!($data->start_cut_off == $data->end_cut_off)) {
                        $waktuSekarang = Carbon::now();
                        $mulaiCutOff = Carbon::parse($data->start_cut_off); // 00:00. 23:50
                        $selesaiCutOff = Carbon::parse($data->end_cut_off); // 08:00, 01:00
                        if($selesaiCutOff->lt($mulaiCutOff)) {
                            $selesaiCutOff = Carbon::parse($data->end_cut_off)->addDay();
                        } else {
                            $selesaiCutOff = Carbon::parse($data->end_cut_off);
                        }
                        if ($waktuSekarang->between($mulaiCutOff, $selesaiCutOff)) {                        
                            event(new TopUpEventFailed($this->authId, 'Produk ini sedang Offline hingga pukul ' . $data->end_cut_off . ' WIB')); 
                            $this->delete(); 
                            return;
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
                        event(new TopUpEventFailed($this->authId, 'Denom ini sedang Offline. Silahkan pilih Denom lain')); 
                        $this->delete(); 
                        return;
                    }

                    if($data->modal != $cekOffline['data'][0]['price']) {   
                        $hargaModal = $cekOffline['data'][0]['price'];
                        $data->update([
                            'modal' => $cekOffline['data'][0]['price'],
                            'profit' => $data->harga_jual - $cekOffline['data'][0]['price'],
                            'profit_reseller' => $data->harga_jual_reseller - $cekOffline['data'][0]['price']
                        ]);
                        if($this->authUser->role->name == 'admin') {
                            if($data->harga_jual < $cekOffline['data'][0]['price']) {
                                $data->update([
                                    'status' => 3
                                ]);
                                event(new TopUpEventFailed($this->authId, 'Harga Jual di bawah Harga Modal! Transaksi di batalkan!')); 
                                $this->delete(); 
                                return;
                            }
                        } else if($this->authUser->role->name == 'reseller') {
                            if($data->harga_jual_reseller < $cekOffline['data'][0]['price']) {
                                $data->update([
                                    'status' => 3
                                ]);
                                event(new TopUpEventFailed($this->authId, 'Denom ini sedang Offline. Harap pilih Denom yang lain'));
                                $this->delete(); 
                                return;
                            }
                        }                           
                    } else {
                        $hargaModal = $data->modal;
                    }

                    if($user->role->name == 'reseller') {
                        if($data->harga_jual_reseller < $hargaModal) {                                
                            event(new TopUpEventFailed($this->authId, 'Denom ini sedang Offline. Silahkan pilih Denom lain'));
                            $this->delete(); 
                            return;
                        }                        
                    } elseif($user->role->name == 'admin') {
                        if($data->harga_jual < $hargaModal) {
                            $data->update([
                                'status' => 3
                            ]);
                            event(new TopUpEventFailed($this->authId, 'Harga Jual di bawah Harga Modal! Transaksi di batalkan!'));
                            $this->delete(); 
                            return;
                        }  
                    }
                    
                    if($user->role->name == 'reseller') {
                        $profit = $data->profit_reseller;
                        $total = $data->harga_jual_reseller;
                    } else {
                        $profit = $data->profit;
                        $total = $data->harga_jual;
                    }

                    $saldo = Http::withHeaders([
                        'Content-Type' => 'application/json',
                    ])->post('https://api.digiflazz.com/v1/cek-saldo', [
                        'cmd' => 'deposit',
                        'username' => env('DIGIFLAZZ_USERNAME'),
                        'sign' => md5(env('DIGIFLAZZ_USERNAME') . env('DIGIFLAZZ_SECRET_KEY') . 'depo')
                    ]);

                    if($saldo['data']['deposit'] <= $data->modal) {                       
                        event(new TopUpEventFailed($this->authId, 'Terdapat Error. Harap Hubungi Admin!'));
                        $this->delete(); 
                        return;
                    }                        
    
                    $via = 'REALM';                        

                    if ($data->seller_name == 'BANGJEFF' && $data->game->brand == 'LifeAfter Credits') {
                        $customer_no = $this->userId . ',' . $this->serverId;
    
                    } elseif ($data->game->brand == 'Honkai Star Rail') {
                        if($data->seller_name == 'HOPE') {
                            $customer_no = $this->userId . '|' . $this->serverId;
                        } elseif ($data->seller_name == 'VocaGame') {
                            if($this->serverId == 'os_asia') {
                                $serverId = 'prod_official_asia';
                            } elseif($this->serverId == 'os_usa') {
                                $serverId = 'prod_official_usa';
                            } elseif($this->serverId == 'os_euro') {
                                $serverId = 'prod_official_eur';
                            } else {  
                                event(new TopUpEventFailed($this->authId, 'Produk ini dengan Server TW_HK_MO tidak support! Harap pilih denom yang lain'));   
                                $this->delete(); 
                                return;                           
                            }
                            $customer_no = $this->userId . '|' . $serverId;
                        } elseif($data->seller_name == 'YinYangStoreid') {
                            $customer_no = $this->userId . '|' . $this->serverId;
                        } elseif($data->seller_name == 'LUQMANTRONIK') {
                            $customer_no = $this->userId . $this->serverId;
                        }                
                    } elseif($data->game->brand == 'Genshin Impact') {    
                        if($data->seller_name == 'HOPE') {
                            $customer_no = $this->userId . '|' . $this->serverId;
                        } elseif($data->seller_name == 'lapakgamingcom') {
                            if($this->serverId == 'os_asia') {
                                $serverId = '001';
                            } elseif($this->serverId == 'os_usa') {
                                $serverId = '002';
                            } elseif($this->serverId == 'os_euro') {
                                $serverId = '003';
                            } elseif($this->serverId == 'os_cht') {
                                $serverId = '004';
                            } else {  
                                event(new TopUpEventFailed($this->authId, 'Produk ini dengan Server TW_HK_MO tidak support! Harap pilih denom yang lain'));   
                                $this->delete(); 
                                return;                            
                            }
                            $customer_no = $serverId . $this->userId;
                        }
                        
                    } elseif ($data->game->brand == 'Clash of Clans') {
                        $customer_no = '#' . $this->userId;
    
                    } elseif ($data->game->brand == 'Hay Day') {
                        $customer_no = '#' . $this->userId;
    
                    } elseif ($data->game->brand == 'League of Legends Wild Rift') {
                        $customer_no = $this->userId . '#' . $this->userId;
    
                    } elseif ($data->game->brand == 'Valorant') {
                        $customer_no = $this->userId . '#' . $this->serverId; 
                        
                    } elseif ($data->game->brand == 'Tower of Fantasy') {
                        $customer_no = $this->userId . ',' . $this->serverId; 
                        
                    } elseif ($data->game->brand == 'Ragnarok Origin') {
                        if($data->seller_name == 'BANGJEFF') {
                            $customer_no = $this->userId . ',' . $this->userNickname . ',' . $this->serverId;
                        } else {
                            Log::error('Error occurred: Format customer_no dengan seller ' . $data->seller_name . ' belum di setting!');
                            event(new TopUpEventFailed($this->authId, 'Produk ini sedang Offline'));   
                            $this->delete(); 
                            return;                     
                        }                   
    
                    } elseif ($data->game->brand == 'One Punch Man') {
                        if($data->seller_name == 'BANGJEFF') {
                            $customer_no = $this->userId . ',' . $this->serverId; 
                        } else {
                            event(new TopUpEventFailed($this->authId, 'Produk ini sedang Offline')); 
                            $this->delete(); 
                            return;
                        }
    
                    } else {
                        $customer_no = $this->userId . $this->serverId;
                    }

                    $datePart = now()->format('Ymd');
                    $lastOrder = Invoice::orderby('id', 'desc')->first();
                    $randNumber = rand(100,999);
                    $sequenceNumber = $lastOrder ? sprintf('%05d', $lastOrder->id + 1) : '00001';
                    $invoiceNumber = 'TRX' . $datePart . $randNumber . $sequenceNumber;

                    $currentTime = now();
                    $expiredTime = $currentTime->addHours(17);
                    $expiredAt = $expiredTime->format('Y-m-d\TH:i:s.u\Z');                        

                    $createInvoice = Invoice::create([                                                   
                        'nomor_invoice' => $invoiceNumber,                                
                        'user_id' => $this->userId,
                        'server_id' => $this->serverId,
                        'customer' => $customer_no,
                        'phone' => $user->phone,
                        'realm_user_id' => $this->authId,
                        'game_id' => $data->game->id,
                        'harga_id' => $data->id, 
                        'payment_id' => 99,
                        'modal' => $hargaModal,
                        'profit' => $profit,
                        'total' => $total,
                        'status' => 'PENDING',      
                        'via' => $via,                          
                        'expired_at' => $expiredAt,
                    ]);                    
                    if($createInvoice) {
                        $response = Http::withHeaders([
                            'Content-Type' => 'application/json',
                        ])->post('https://api.digiflazz.com/v1/transaction', [
                            'username' => env('DIGIFLAZZ_USERNAME'),
                            'buyer_sku_code' => $data->kode_produk,
                            'customer_no' => $customer_no,
                            'ref_id' => $invoiceNumber,
                            'sign' => md5(env('DIGIFLAZZ_USERNAME') . env('DIGIFLAZZ_SECRET_KEY') . $invoiceNumber)
                        ]); 
                        if($response->successful()) {
                            if(isset($response['data']['wa'])) {
                                $wa = $response['data']['wa'];
                            } else {
                                $wa = 'Kosong';
                            }    
                            if(isset($response['data']['tele'])) {
                                $tele = $response['data']['tele'];
                            } else {
                                $tele = 'Kosong';
                            }                  
                            $digiflazz = Digiflazz::create([
                                'saldo_terakhir' => $response['data']['buyer_last_saldo'],
                                'saldo_terpotong' => $response['data']['price'],
                                'message' => $response['data']['message'],
                                'seller_telegram' => $tele,
                                'seller_whatsapp' => $wa,
                                'status' => $response['data']['status']
                            ]);   
                            $createInvoice->update([
                                'digiflazz_id' => $digiflazz->id
                            ]); 
                            // $this->nomorInvoice = $invoiceNumber;                                                        
                            event(new TopUpEvent($this->authId, $invoiceNumber));     
                        }  else {
                            Log::channel('topup')->error('Terdapat error boskuh : ' . $response->json()); 
                            event(new TopUpEventFailed($this->authId, 'Terdapat masalah saat proses pengisian!')); 
                        }                                             
                    } else {
                        event(new TopUpEventFailed($this->authId, 'Terdapat masalah saat proses pengisian!'));
                    }  
                } else { 
                    event(new TopUpEventFailed($this->authId, 'Password Kamu Salah'));                                           
                }
            } else {
                event(new TopUpEventFailed($this->authId, 'Denom ini sedang Offline, silahkan pilih Denom yang lain'));                 
            }
        } catch (\Exception $e) {
            Log::channel('topup')->error('Terdapat error Bosss : ' . $e->getMessage()); 
            event(new TopUpEventFailed($this->authId, 'Terdapat Masalah! Harap Hubungi Admin!')); 
        }
    }
}

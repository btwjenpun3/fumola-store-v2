<?php

namespace App\Livewire\Realm;

use Carbon\Carbon;
use App\Models\Game;
use App\Models\Customer;
use App\Models\Harga;
use App\Models\Invoice;
use App\Models\Digiflazz;
use Livewire\Component;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\GlobalController as CheckId;
use App\Http\Controllers\TopupController;
use App\Jobs\TopUpRealmJob;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;

class TopUp extends Component
{
    public $slug;

    public $productCode;

    public $userId, $userNickname, $serverId;

    public $playerName;

    public $image;

    public $showCustomerField = false; 

    public $customerField;

    public $password;

    public $nomorInvoice;

    public function mount($slug)
    {
        $this->slug = $slug;
    }

    public function fetchData()
    {
        $game = Game::where('slug', $this->slug)->first();
        return $game;
    }    
    
    public function showImage()
    {
        $data = $this->fetchData();
        $this->image = str_replace('games/', '', $data->slug . '.webp');
    }

    public function checkId($slug)
    {
        $checkId = new CheckId();
        $call = $checkId->cekId($slug, $this->userId, $this->serverId);        
        $result = json_decode($call, true);
        switch($result['status']) {
            case(200):
                $this->playerName = $result['nickname'];
                $this->dispatch('player-found'); 
                break;
            case(400) :
                $this->dispatch('player-not-found'); 
                break;  
        }        
    }

    public function fillCustomer($id)
    {
        $data = Customer::where('id', $id)->first();
        $this->userId = $data->user;
        $this->serverId = $data->server;
        $this->userNickname = $data->nickname;
        $this->dispatch('customer-fill');
    }

    public function topup()
    {
        $this->validate([
            'productCode' => 'required',
            'userId' => 'required',
            'password' => 'required'
        ]);        
        try {               
            // dispatch(new TopUpRealmJob(auth()->id(), auth()->user(), $this->password, $this->userId, $this->serverId, $this->userNickname, $this->productCode, $this->customerField));     
            $data = Harga::where('kode_produk', $this->productCode)->first();
            if ($data && $data->status === 1) {  

                $user = auth()->user();

                if (!Hash::check($this->password, $user->password)) {
                    $this->dispatch('error', 'Password Akun Realm Kamu Salah!');
                    $this->dispatch('topup-failed');
                    return;
                }                
                
                if (!$data || $data->status !== 1) {
                    $this->dispatch('error', 'Denom ini sedang Offline, silahkan pilih Denom yang lain');
                    $this->dispatch('topup-failed');
                    return;
                }

                if ($user->role->name === 'reseller' && $user->saldo <= $data->harga_jual_reseller ) {
                        $this->dispatch('error', 'Saldo Kamu Kurang! Harap Recharge Saldo Kamu Lagi!');
                        $this->dispatch('topup-failed');
                        return; 
                }
                
                if (isset($this->customerField)) {
                    $customer_server = isset($this->serverId) ? $this->server_id : null;
                    $customer_nickname = isset($this->userNickname) ? $this->userNickname : null;

                    Customer::create([
                        'game_id' => $data->game->id,
                        'user_id' => auth()->id(),
                        'name' => $this->customerField,
                        'user' => $this->userId,
                        'server' => $customer_server,
                        'nickname' => $customer_nickname
                    ]); 
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
                        $this->dispatch('error', 'Produk ini sedang Offline hingga pukul ' . $data->end_cut_off . ' WIB'); 
                        $this->dispatch('topup-failed');
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
                    $this->dispatch('error', 'Denom ini sedang Offline. Silahkan pilih Denom lain'); 
                    $this->dispatch('topup-failed');
                    return; 
                }
                
                if($data->modal != $cekOffline['data'][0]['price']) {   
                    $hargaModal = $cekOffline['data'][0]['price'];
                    $data->update([
                        'modal' => $cekOffline['data'][0]['price'],
                        'profit' => $data->harga_jual - $cekOffline['data'][0]['price'],
                        'profit_reseller' => $data->harga_jual_reseller - $cekOffline['data'][0]['price']
                    ]);
                    if(auth()->user()->role->name == 'admin') {
                        if($data->harga_jual < $cekOffline['data'][0]['price']) {
                            $data->update([
                                'status' => 3
                            ]);
                            $this->dispatch('error', 'Harga Jual di bawah Harga Modal! Transaksi di batalkan!');
                            $this->dispatch('topup-failed');
                            return; 
                        }
                    } else if(auth()->user()->role->name == 'reseller') {
                        if($data->harga_jual_reseller < $cekOffline['data'][0]['price']) {
                            $data->update([
                                'status' => 3
                            ]);
                            $this->dispatch('error', 'Denom ini sedang Offline. Harap pilih Denom yang lain'); 
                            $this->dispatch('topup-failed');
                            return; 
                        }
                    }                           
                } else {
                    $hargaModal = $data->modal;
                }

                if ($user->role->name == 'reseller' && $data->harga_jual_reseller < $hargaModal) {
                    $this->dispatch('error', 'Denom ini sedang Offline. Harap pilih Denom yang lain'); 
                    $this->dispatch('topup-failed');
                    return;
                } elseif ($user->role->name == 'admin' && $data->harga_jual < $hargaModal) {
                    $data->update(['status' => 3]);
                    $this->dispatch('error', 'Harga Jual di bawah Harga Modal! Transaksi di batalkan!');
                    $this->dispatch('topup-failed');
                    return; 
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
                    $this->dispatch('error', 'Terdapat Error. Harap Hubungi Admin!'); 
                    $this->dispatch('topup-failed');
                    return; 
                } 
                
                $via = 'REALM'; 

                $call = new TopupController();
                try {
                    $customer_no = $call->generateCustomerNo($data->seller_name, $data->game->brand, $this->userId, $this->serverId, $this->userNickname);
                } catch (\Exception $e) {
                    $errorMessage = $e->getMessage();
                    $this->dispatch('error', $errorMessage);
                    return;
                }

                // if ($data->seller_name == 'BANGJEFF' && $data->game->brand == 'LifeAfter Credits') {
                //     $customer_no = $this->userId . ',' . $this->serverId;

                // } elseif ($data->game->brand == 'Honkai Star Rail') {
                //     if($data->seller_name == 'HOPE') {
                //         $customer_no = $this->userId . '|' . $this->serverId;
                //     } elseif ($data->seller_name == 'VocaGame') {
                //         if($this->serverId == 'os_asia') {
                //             $serverId = 'prod_official_asia';
                //         } elseif($this->serverId == 'os_usa') {
                //             $serverId = 'prod_official_usa';
                //         } elseif($this->serverId == 'os_euro') {
                //             $serverId = 'prod_official_eur';
                //         } else {
                //             $this->dispatch('error', 'Produk ini dengan Server TW_HK_MO tidak support! Harap pilih denom yang lain');   
                //             return;                              
                //         }
                //         $customer_no = $this->userId . '|' . $serverId;
                //     } elseif($data->seller_name == 'YinYangStoreid') {
                //         $customer_no = $this->userId . '|' . $this->serverId;
                //     } elseif($data->seller_name == 'LUQMANTRONIK') {
                //         $customer_no = $this->userId . $this->serverId;
                //     }                
                // } elseif($data->game->brand == 'Genshin Impact') {    
                //     if($data->seller_name == 'HOPE') {
                //         $customer_no = $this->userId . '|' . $this->serverId;
                //     } elseif($data->seller_name == 'lapakgamingcom') {
                //         if($this->serverId == 'os_asia') {
                //             $serverId = '001';
                //         } elseif($this->serverId == 'os_usa') {
                //             $serverId = '002';
                //         } elseif($this->serverId == 'os_euro') {
                //             $serverId = '003';
                //         } elseif($this->serverId == 'os_cht') {
                //             $serverId = '004';
                //         } else {
                //             $this->dispatch('error', 'Produk ini dengan Server TW_HK_MO tidak support! Harap pilih denom yang lain');  
                //             return;                               
                //         }
                //         $customer_no = $serverId . $this->userId;
                //     }
                    
                // } elseif ($data->game->brand == 'Clash of Clans') {
                //     $customer_no = '#' . $this->userId;

                // } elseif ($data->game->brand == 'Hay Day') {
                //     $customer_no = '#' . $this->userId;

                // } elseif ($data->game->brand == 'League of Legends Wild Rift') {
                //     $customer_no = $this->userId . '#' . $this->userId;

                // } elseif ($data->game->brand == 'Valorant') {
                //     $customer_no = $this->userId . '#' . $this->serverId; 
                    
                // } elseif ($data->game->brand == 'Tower of Fantasy') {
                //     $customer_no = $this->userId . ',' . $this->serverId; 
                    
                // } elseif ($data->game->brand == 'Ragnarok Origin') {
                //     if($data->seller_name == 'BANGJEFF') {
                //         $customer_no = $this->userId . ',' . $this->userNickname . ',' . $this->serverId;
                //     } else {
                //         Log::error('Error occurred: Format customer_no dengan seller ' . $data->seller_name . ' belum di setting!');
                //         $this->dispatch('error', 'Produk ini sedang Offline');   
                //         $this->dispatch('topup-failed');  
                //         return;                        
                //     }                   

                // } elseif ($data->game->brand == 'One Punch Man') {
                //     if($data->seller_name == 'BANGJEFF') {
                //         $customer_no = $this->userId . ',' . $this->serverId; 
                //     } else {
                //         $this->dispatch('error', 'Produk ini sedang Offline');
                //         $this->dispatch('topup-failed');
                //         return; 
                //     }

                // } else {
                //     $customer_no = $this->userId . $this->serverId;
                // }
                
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
                    'realm_user_id' => auth()->id(),
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
                        $this->nomorInvoice = $invoiceNumber;                                                        
                        $this->dispatch('topup-success');
                    }  else {
                        Log::channel('topup')->error('Terdapat error : ' . $response->json()); 
                        $this->dispatch('error', 'Terdapat masalah saat proses pengisian!'); 
                        $this->dispatch('topup-failed');
                    }                                             
                } else {
                    $this->dispatch('error', 'Terdapat masalah saat proses pengisian!'); 
                    $this->dispatch('topup-failed');
                }  
            } else {
                $this->dispatch('error', 'Denom ini sedang Offline, silahkan pilih Denom yang lain'); 
                $this->dispatch('topup-failed');                
            }
        } catch (\Exception $e) {
            Log::channel('topup')->error('Terdapat error asd : ' . $e->getMessage()); 
            $this->dispatch('error', 'Terdapat masalah, harap hubungi Admin! (500)'); 
            $this->dispatch('topup-failed');
        }
    }

    public function render()
    {        
        return view('livewire.realm.top-up', [
            'game' => $this->fetchData(),
            'harga' => $this->fetchData()->harga,
            'customers' => $this->fetchData()->customer->where('user_id', auth()->id())
        ]);
    }
}

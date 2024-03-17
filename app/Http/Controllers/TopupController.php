<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Harga;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

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
}

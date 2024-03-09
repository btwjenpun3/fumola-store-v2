<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use Aditdev\ApiGames;

class GlobalController extends Controller
{
    public function formatRupiah($angka)
    {
        $formatted = 'Rp. ' . number_format($angka, 0, ',', '.');
        return $formatted;
    }

    public function cekSaldo()
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
        ])->post('https://api.digiflazz.com/v1/cek-saldo', [
            'cmd' => 'deposit',
            'username' => env('DIGIFLAZZ_USERNAME'),
            'sign' => md5(env('DIGIFLAZZ_USERNAME') . env('DIGIFLAZZ_SECRET_KEY') . 'depo')
        ]);
        if ($response->successful()) {
            return $this->formatRupiah($response['data']['deposit']);            
        } else {
            return 'Error. Silahkan cek API kamu!';
        }        
    }

    public function cekId($slug, $userId, $serverId = null)
    {
        $api = new ApiGames();
        if($slug == 'mobile-legend') {
            $result = $api->MOBILE_LEGENDS($userId, $serverId);    

        } elseif($slug == 'call-of-duty-mobile') {
            $result = $api->CALL_OF_DUTY($userId);  

        } elseif($slug == 'free-fire') {
            $result = $api->FREEFIRE($userId);            

        } elseif($slug == 'league-of-legends-wild-rift') {
            $userId = $userId . '#' . $serverId;
            $result = $api->WILD_RIFT($userId);
        
        } elseif($slug == 'love-nikki') {
            $result = $api->LOVENIKKI($userId);
        }       

        return $result;
    }
}

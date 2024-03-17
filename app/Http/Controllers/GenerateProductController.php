<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GenerateProductController extends Controller
{
    public function generate()
    {
        $data = Game::all();
        $path = public_path('mock/categories.json');
        $mock = [];  
        $all = []; 
        $game = [];  
        $pulsa = [];
        $voucher = [];  
        foreach($data as $g) {
            $all[] = [
                '_id' => $g->id,
                'title' => $g->nama,
                'production' => $g->brand,
                'image' => asset(Storage::url($g->url_gambar)),
                'url' => '/' . $g->slug
            ];
            if($g->kategori === 'Games') {            
                $game[] = [
                    '_id' => $g->id,
                    'title' => $g->nama,
                    'production' => $g->brand,
                    'image' => asset(Storage::url($g->url_gambar)),
                    'url' => '/' . $g->slug
                ];
            } elseif ($g->kategori === 'Voucher') {          
                $voucher[] = [
                    '_id' => $g->id,
                    'title' => $g->nama,
                    'production' => $g->brand,
                    'image' => asset(Storage::url($g->url_gambar)),
                    'url' => '/' . $g->slug
                ];
            } elseif ($g->kategori === 'Pulsa') {          
                $pulsa[] = [
                    '_id' => $g->id,
                    'title' => $g->nama,
                    'production' => $g->brand,
                    'image' => asset(Storage::url($g->url_gambar)),
                    'url' => '/' . $g->slug
                ];
            }
        } 
        $mock[] = [
            '_id' => 1,
            'all' => $all
        ]; 
        $mock[] = [
            '_id' => 2,
            'mlbb' => $game
        ];
        $mock[] = [
            '_id' => 3,
            'mobile' => $voucher
        ];
        $mock[] = [
            '_id' => 4,
            'pc' => $pulsa
        ];          
        $jsonData = json_encode($mock, JSON_PRETTY_PRINT);   
        file_put_contents($path, $jsonData);    
    }
}

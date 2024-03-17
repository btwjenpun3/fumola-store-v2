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
        $games = [];     
        foreach($data as $g) {
            $games[] = [
                '_id' => $g->id,
                'title' => $g->nama,
                'production' => $g->brand,
                'image' => asset(Storage::url($g->url_gambar)),
                'url' => '/' . $g->slug
            ];
        } 
        $mock[] = [
            '_id' => 1,
            'all' => $games
        ];
        $jsonData = json_encode($mock, JSON_PRETTY_PRINT);   
        file_put_contents($path, $jsonData);    
    }
}

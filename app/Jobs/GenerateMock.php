<?php

namespace App\Jobs;

use App\Models\Game;
use Illuminate\Support\Facades\Storage;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class GenerateMock implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $data = Game::orderBy('nama', 'asc')->where('status', 1)->get();
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
                'url' => '/top-up/' . $g->slug
            ];
            if($g->kategori === 'Games') {            
                $game[] = [
                    '_id' => $g->id,
                    'title' => $g->nama,
                    'production' => $g->brand,
                    'image' => asset(Storage::url($g->url_gambar)),
                    'url' => '/top-up/' . $g->slug
                ];
            } elseif ($g->kategori === 'Voucher') {          
                $voucher[] = [
                    '_id' => $g->id,
                    'title' => $g->nama,
                    'production' => $g->brand,
                    'image' => asset(Storage::url($g->url_gambar)),
                    'url' => '/top-up/' . $g->slug
                ];
            } elseif ($g->kategori === 'Pulsa') {          
                $pulsa[] = [
                    '_id' => $g->id,
                    'title' => $g->nama,
                    'production' => $g->brand,
                    'image' => asset(Storage::url($g->url_gambar)),
                    'url' => '/top-up/' . $g->slug
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

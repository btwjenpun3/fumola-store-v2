<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;

class RedisController extends Controller
{
    public function game()
    {
        $data = Cache::remember('games', 60, function () {
            return Game::get();
        });

        return $data;
    }

    public function webHomepage()
    {
        $home = Cache::remember('web_home_page', 180, function () {
            return view('web.pages.home');
        });        
        return $home;
    }
}

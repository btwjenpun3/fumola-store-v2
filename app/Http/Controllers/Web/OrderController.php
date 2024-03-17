<?php

namespace App\Http\Controllers\Web;

use App\Models\Game;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $game = Game::where('slug', $request->slug)->first();
        return view('web.pages.order.order', [
            'game' => $game
        ]);
    }
}

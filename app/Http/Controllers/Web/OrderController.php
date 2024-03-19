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
        switch($game->status) {
            case(0) :
                abort(404);
            break;            
            case(1) :
                return view('web.pages.order.order', [
                    'game' => $game
                ]);
            break;            
            default :
                abort(404);
        }        
    }
}

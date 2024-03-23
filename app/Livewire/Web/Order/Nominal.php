<?php

namespace App\Livewire\Web\Order;

use App\Http\Controllers\GlobalController;
use Livewire\Component;

class Nominal extends Component
{
    public $game;

    public function mount($game)
    {
        $this->game = $game;
    }    

    public function render()
    {
        $call = new GlobalController();
        return view('livewire.web.order.nominal', [
            'tipe' => $this->game->harga()->orderBy('tipe', 'desc')->distinct()->pluck('tipe'),
            'umum' => $this->game->harga->where('tipe', 'Umum'),
            'membership' => $this->game->harga->where('tipe', 'Membership'),
            'la1' => $this->game->harga->where('tipe', 'LifeAfter A')->where('status', 1),
            'la2' => $this->game->harga->where('tipe', 'LifeAfter B')->where('status', 1),
            'call' => $call
        ]);
    }
}

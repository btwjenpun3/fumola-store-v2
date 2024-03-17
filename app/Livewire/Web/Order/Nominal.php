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
            'tipe' => $this->game->harga()->distinct()->pluck('tipe'),
            'umum' => $this->game->harga->where('tipe', 'Umum'),
            'membership' => $this->game->harga->where('tipe', 'Membership'),
            'call' => $call
        ]);
    }
}

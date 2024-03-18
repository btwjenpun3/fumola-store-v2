<?php

namespace App\Livewire\Web\Order;

use Livewire\Component;

class PlayerInfo2Form extends Component
{
    public  $game; 

    public $userId, $serverId;    

    protected $listeners = ['updatedUserId', 'updatedServerId'];

    public function mount($game)
    {
        $this->game = $game;
    }

    public function updatedUserId($value)
    {
        $this->dispatch('set-user-id', $value);
    }

    public function updatedServerId($value)
    {
        $this->dispatch('set-server-id', $value);
    }
    
    public function render()
    {
        return view('livewire.web.order.player-info2-form', [
            'game' => $this->game
        ]);
    }
}

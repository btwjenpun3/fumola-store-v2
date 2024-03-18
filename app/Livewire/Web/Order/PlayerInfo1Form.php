<?php

namespace App\Livewire\Web\Order;

use Livewire\Component;

class PlayerInfo1Form extends Component
{
    public $userId, $serverId;    

    protected $listeners = ['updatedUserId', 'updatedServerId'];

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
        return view('livewire.web.order.player-info1-form');
    }
}

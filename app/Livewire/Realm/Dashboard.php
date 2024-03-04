<?php

namespace App\Livewire\Realm;

use App\Http\Controllers\GlobalController;
use Livewire\Component;

class Dashboard extends Component
{
    public $saldo;

    public function mount()
    {
        $call = new GlobalController();
        $this->saldo = $call->cekSaldo();
    }

    public function render()
    {
        return view('livewire.realm.dashboard');
    }
}

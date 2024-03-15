<?php

namespace App\Livewire\Realm;

use App\Models\Invoice;
use Livewire\Component;
use Livewire\WithoutUrlPagination;
use Livewire\WithPagination;

class Transaksi extends Component
{
    use WithPagination, WithoutUrlPagination;

    public function render()
    {
        return view('livewire.realm.transaksi', [
            'data' => Invoice::with('digiflazz')->orderBy('id', 'desc')->cursorPaginate(10)
        ]);
    }
}

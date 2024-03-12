<?php

namespace App\Livewire\Realm;

use App\Models\Invoice;
use Livewire\Component;
use Livewire\WithoutUrlPagination;
use Livewire\WithPagination;

class InvoiceWeb extends Component
{
    use WithPagination, WithoutUrlPagination; 

    public function render()
    {
        return view('livewire.realm.invoice-web', [
            'data' => Invoice::where('via', 'WEB')->orderBy('id', 'desc')->cursorPaginate(10)
        ]);
    }
}

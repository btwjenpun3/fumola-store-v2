<?php

namespace App\Livewire\Simulate;

use App\Events\TopUpEvent;
use App\Events\TopUpSuccess;
use App\Models\Invoice;
use Livewire\Component;
use Illuminate\Support\Facades\Http;

class QrSimulate extends Component
{
    public $invoice;

    public function mount($invoice)
    {
        $this->invoice = $invoice;
    }

    public function simulate()
    {
        $data = Invoice::where('nomor_invoice', $this->invoice)->first();

        event(new TopUpEvent($this->invoice, 'OKE'));
    }

    public function simulatee()
    {
        $data = Invoice::where('nomor_invoice', $this->invoice)->first();

        event(new TopUpSuccess($this->invoice, 'OKE'));
    }

    public function render()
    {
        return view('livewire.simulate.qr-simulate');
    }
}

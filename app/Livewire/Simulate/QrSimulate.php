<?php

namespace App\Livewire\Simulate;

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

        $response = Http::withHeaders([
            'api-version' => '2022-07-31',
            'Content-Type' => 'application/json',
        ])->post('https://api.xendit.co/qr_codes/ ' . $data->xendit_invoice_id . '/payments/simulate', [
            'amount' => $data->total
        ]);

        dd($response);
    }

    public function render()
    {
        return view('livewire.simulate.qr-simulate');
    }
}

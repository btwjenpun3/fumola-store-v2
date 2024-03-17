<?php

namespace App\Livewire\Web\Order;

use Livewire\Component;
use Livewire\Attributes\On;

class Confirm extends Component
{
    public $price = false;
    public $paymentMethod = false;
    
    public $finalPrice, $finalPaymentMethod;

    #[On('final-price')]
    public function setPaymentAndPrice($payload)
    {
        $this->finalPrice = $payload['hargaAkhir'];
        $this->finalPaymentMethod = $payload['paymentMethod'];
        $this->dispatch('final-price-set', $payload['hargaAkhir']);
        $this->dispatch('final-payment-method-set', $payload['paymentMethod']);         
    }

    public function confirm()
    {
        if(!$this->price || !$this->paymentMethod) {
            dd('error');
        } else {
            dd('oke');
        }
    }

    public function render()
    {
        return view('livewire.web.order.confirm');
    }
}

<?php

namespace App\Livewire\Web\Order;

use App\Models\Payment;
use Livewire\Component;
use Livewire\Attributes\On;

class Confirm extends Component
{
    public $price;
    public $paymentMethod;
    
    public $finalUserId, $finalServerId, $finalPrice, $finalPaymentMethod;

    public $allSets = false;
    
    #[On('set-user-id')]
    public function setUserId($userId)
    {
        $this->finalUserId = $userId;
    }

    #[On('set-server-id')]
    public function setServerId($serverId)
    {
        $this->finalServerId = $serverId;
    }

    #[On('set-harga')]
    public function setPrice($harga)
    {
        $this->price = $harga;
    }

    #[On('set-payment')]
    public function setPayment($payment)
    {
        $this->paymentMethod = $payment;
    }

    public function confirm()
    {
        if(!isset($this->finalUserId)) {
            $this->dispatch('requirement-not-meet', 'User ID Tidak Boleh Kosong!');
        }         
        
        if(!isset($this->price)) {
            $this->dispatch('requirement-not-meet', 'Nominal Top-Up Tidak Boleh Kosong!');
        } 

        if (!isset($this->paymentMethod)) {
            $this->dispatch('requirement-not-meet', 'Pembayaran Tidak Boleh Kosong!');
        } else {
            if(!isset($this->price)) {
                $this->dispatch('requirement-not-meet', 'Nominal Top-Up Tidak Boleh Kosong!');
            } else if(!isset($this->finalUserId)) {
                $this->dispatch('requirement-not-meet', 'User ID Tidak Boleh Kosong!');
            } else {

                $data = Payment::where('payment_method', $this->paymentMethod)->first();

                if ($data->payment_type === 'EWALLET' || $data->payment_type === 'QRIS') {
                    $this->finalPrice = ($this->price * $data->admin_fee / 100) + $this->price;
                    $this->dispatch('final-price-set', round($this->finalPrice));
                    $this->dispatch('final-payment-method-set', $this->paymentMethod);

                } elseif ($data->payment_type === 'VA' || $data->payment_type === 'OUTLET') {
                    $this->finalPrice = $data->admin_fee_fixed + $this->price;
                    $this->dispatch('final-price-set', round($this->finalPrice));
                    $this->dispatch('final-payment-method-set', $this->paymentMethod);
                }                
                $this->dispatch('final-user-id-set', $this->finalUserId);
                $this->allSets = true;
            }
        }
    }

    public function render()
    {
        return view('livewire.web.order.confirm', [
            'allSet' => $this->allSets
        ]);
    }
}

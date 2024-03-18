<?php

namespace App\Livewire\Web\Order;

use App\Http\Controllers\TopupController;
use App\Models\Payment;
use Livewire\Component;
use Livewire\Attributes\On;
use Illuminate\Support\Facades\Log;

class Confirm extends Component
{
    public $price;
    public $kode;
    public $paymentMethod;
    
    public $finalUserId, $finalServerId, $finalPrice, $finalPaymentMethod, $phone;

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
    public function setPrice($harga, $kode)
    {
        $this->price = $harga;
        $this->kode = $kode;
    }

    #[On('set-payment')]
    public function setPayment($payment)
    {
        $this->paymentMethod = $payment;
    }

    public function confirm()
    {
        if($this->finalUserId === '' || $this->finalUserId === null) {
            $this->dispatch('requirement-not-meet', 'User ID Tidak Boleh Kosong!');
            $this->dispatch('final-user-id-set', '');
            $this->allSets = false;
        }  
        
        if($this->phone === '' || $this->phone === null) {
            $this->dispatch('requirement-not-meet', 'Telepon Tidak Boleh Kosong!');
            $this->dispatch('final-phone-id-set', '');
            $this->allSets = false;
        } 
        
        if(!isset($this->price)) {
            $this->dispatch('requirement-not-meet', 'Nominal Top-Up Tidak Boleh Kosong!');
            $this->allSets = false;
        } 

        if (!isset($this->paymentMethod)) {
            $this->dispatch('requirement-not-meet', 'Pembayaran Tidak Boleh Kosong!');
            $this->allSets = false;
        } else {
            if(!isset($this->price)) {
                $this->dispatch('requirement-not-meet', 'Nominal Top-Up Tidak Boleh Kosong!');
                $this->allSets = false;
            } else if($this->finalUserId === '' || $this->finalUserId === null) {
                $this->dispatch('requirement-not-meet', 'User ID Tidak Boleh Kosong!');
                $this->dispatch('final-user-id-set', '');
                $this->allSets = false;
            } else if($this->phone === '' || $this->phone === null) {
                $this->dispatch('requirement-not-meet', 'Telepon Tidak Boleh Kosong!');
                $this->dispatch('final-phone-id-set', '');
                $this->allSets = false;
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
                $this->dispatch('final-server-id-set', $this->finalServerId);
                $this->dispatch('final-phone-id-set', $this->phone);
                $this->allSets = true;
            }
        }
    }

    public function process()
    {
        if($this->allSets === true) {
            try {
                $call = new TopUpController();
                $result = $call->webProcess($this->kode, $this->finalUserId, $this->finalServerId, round($this->finalPrice), $this->paymentMethod, $this->phone);
                if($result->success) {
                    $this->dispatch('success', 'Invoice Berhasil di Buat. Harap Tunggu Kami Akan Mengalihkan Halaman Anda');
                    return redirect()->route('invoice.index', ['id' => $result->invoiceNumber]);
                }
            } catch (\Exception $e) {                
                $this->dispatch('requirement-not-meet', $e->getMessage());
            }            
        } else {
            $this->dispatch('requirement-not-meet', 'Lengkapi Semua Data Kamu!');
        }
    }

    public function render()
    {
        return view('livewire.web.order.confirm', [
            'allSet' => $this->allSets
        ]);
    }
}

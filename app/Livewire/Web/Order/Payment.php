<?php

namespace App\Livewire\Web\Order;

use App\Models\Payment as Pay;
use App\Http\Controllers\GlobalController;
use Livewire\Component;
use Livewire\Attributes\On;

class Payment extends Component
{   
    public $hargaQris, $hargaDana, $hargaShopee, $hargaLinkAja, $hargaAstraPay, $hargaBca, $hargaBni, $hargaBri, $hargaBjb, $hargaBsi, $hargaAlfamart, $hargaIndomaret, $hargaOvo; 

    public function mount()
    {
        $this->hargaQris = 0;
    }

    #[On('set-harga')]
    public function setHarga($harga)
    {    
        $admins = Pay::whereIn('payment_method', ['QRIS', 'ID_DANA', 'ID_SHOPEEPAY', 'ID_LINKAJA', 'ID_ASTRAPAY', 'BCA', 'BNI', 'BRI', 'BJB', 'BSI', 'ALFAMART', 'INDOMARET', 'ID_OVO'])->get();
        foreach ($admins as $admin) {
            switch ($admin->payment_method) {
                case 'QRIS':
                    $this->hargaQris = round(($harga * $admin->admin_fee / 100) + $harga);
                    $this->dispatch('update-qris', $this->hargaQris);
                    break;
                case 'ID_DANA':
                    $this->hargaDana = round(($harga * $admin->admin_fee / 100) + $harga);
                    $this->dispatch('update-dana', $this->hargaDana);
                    break;
                case 'ID_SHOPEEPAY':
                    $this->hargaShopee = round(($harga * $admin->admin_fee / 100) + $harga);
                    $this->dispatch('update-shopee', $this->hargaShopee);
                    break;
                case 'ID_LINKAJA':
                    $this->hargaLinkAja = round(($harga * $admin->admin_fee / 100) + $harga);
                    $this->dispatch('update-link-aja', $this->hargaLinkAja);
                    break;
                case 'ID_ASTRAPAY':
                    $this->hargaAstraPay = round(($harga * $admin->admin_fee / 100) + $harga);
                    $this->dispatch('update-astra-pay', $this->hargaAstraPay);
                    break;
                case 'ID_OVO':
                    $this->hargaOvo = round(($harga * $admin->admin_fee / 100) + $harga);
                    $this->dispatch('update-ovo', $this->hargaOvo);
                    break;
                case 'BCA':
                    $this->hargaBca = round($harga + $admin->admin_fee_fixed);
                    break;
                case 'BNI':
                    $this->hargaBni = round($harga + $admin->admin_fee_fixed);
                    break;
                case 'BRI':
                    $this->hargaBri = round($harga + $admin->admin_fee_fixed);
                    break;
                case 'BJB':
                    $this->hargaBjb = round($harga + $admin->admin_fee_fixed);
                    break;
                case 'BSI':
                    $this->hargaBsi = round($harga + $admin->admin_fee_fixed);
                    break;
                case 'ALFAMART':
                    $this->hargaAlfamart = round($harga + $admin->admin_fee_fixed);
                    $this->dispatch('update-aflamart', $this->hargaAlfamart);
                    break;
                case 'INDOMARET':
                    $this->hargaIndomaret = round($harga + $admin->admin_fee_fixed);
                    break;
            }            
        }  
    }    

    public function applyPaymentMethod($paymentMethod)
    {
        switch ($paymentMethod) {
            case 'QRIS':
                $hargaAkhir = $this->hargaQris;   
                break;             
            case 'ID_DANA':
                $hargaAkhir = $this->hargaDana;
                break;
            case 'ID_SHOPEEPAY':
                $hargaAkhir = $this->hargaShopee;
                break;
            case 'ID_LINKAJA':
                $hargaAkhir = $this->hargaLinkAja;
                break;
            case 'ID_ASTRAPAY':
                $hargaAkhir = $this->hargaAstraPay;
                break;
            case 'ID_OVO':
                $hargaAkhir = $this->hargaOvo;
                break;
            case 'BCA':
                $hargaAkhir = $this->hargaBca;
                break;
            case 'BNI':
                $hargaAkhir = $this->hargaBni;
                break;
            case 'BRI':
                $hargaAkhir = $this->hargaBri;
                break;
            case 'BJB':
                $hargaAkhir = $this->hargaBjb;
                break;
            case 'BSI':
                $hargaAkhir = $this->hargaBsi;
                break;
            case 'ALFAMART':
                $hargaAkhir = $this->hargaAlfamart;
                break;
            case 'INDOMARET':
                $hargaAkhir = $this->hargaIndomaret;
                break;
        }
        $this->dispatch('final-price', [
            'paymentMethod' => $paymentMethod,
            'hargaAkhir' => $hargaAkhir
        ]);
    }

    public function render()
    {        
        return view('livewire.web.order.payment', [
            'ewallet' => Pay::whereIn('payment_type', ['EWALLET', 'QRIS'])->where('status', 1)->get(),
            'va' => Pay::where('payment_type', 'VA')->where('status', 1)->get(),
        ]);
    }
}

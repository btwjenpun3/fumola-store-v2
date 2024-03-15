<?php

namespace App\Livewire\Realm;

use App\Models\Invoice;
use Livewire\Component;
use Livewire\WithoutUrlPagination;
use Livewire\WithPagination;

class InvoiceUser extends Component
{
    use WithPagination, WithoutUrlPagination;

    public $id, $invoice, $produk, $denom, $tipe_pembayaran, $user_id, $server_id, $metode_pembayaran, $status, $expired, $di_bayar, $total, $sn;

    public function show($id)
    {
        $data = Invoice::where('id', $id)->first();
        $this->id = $id;
        $this->invoice = $data->nomor_invoice;
        $this->produk = $data->game->nama;
        $this->denom = $data->harga->nama_produk;
        $this->tipe_pembayaran = $data->payment->name;
        $this->user_id = $data->user_id;
        $this->server_id = $data->server_id;
        $this->metode_pembayaran = $data->payment->payment_method;
        $this->status = $data->status;
        $this->expired = $data->expired_at;
        $this->di_bayar = $data->updated_at;
        $this->total = $data->total;
        $this->sn = isset($data->digiflazz->sn) ? $data->digiflazz->sn : null;
    }

    public function render()
    {
        return view('livewire.realm.invoice-user', [
            'data' => Invoice::where('realm_user_id', auth()->id())->orderBy('id', 'desc')->cursorPaginate(10)
        ]);
    }
}

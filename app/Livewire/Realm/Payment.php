<?php

namespace App\Livewire\Realm;

use App\Models\Payment as Pay;
use Livewire\Component;
use Illuminate\Support\Facades\Http;

class Payment extends Component
{
    public function ubahStatus($id, $value)
    {
        try {
            Pay::where('id', $id)->update([
                'status' => $value
            ]);
            $this->dispatch('berhasil', 'Status Payment berjasil di ubah');
        } catch (\Exception $e) {
            $this->dispatch('gagal', $e->getMessage());
        }
    }

    public function render()
    {
        return view('livewire.realm.payment', [
            'data' => Pay::orderBy('payment_type', 'asc')->where('name', '!=', 'REALM')->get()
        ]);
    }
}

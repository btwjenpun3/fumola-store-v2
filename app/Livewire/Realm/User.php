<?php

namespace App\Livewire\Realm;

use App\Models\User as Reseller;
use Livewire\Component;
use Livewire\WithoutUrlPagination;
use Livewire\WithPagination;

class User extends Component
{
    use WithPagination, WithoutUrlPagination; 

    public $id, $name, $kode_reseller, $saldoAwal, $nominal, $password;

    public function show($id)
    {
        $data = Reseller::where('id', $id)->first();
        $this->id = $id;
        $this->name = $data->name;
        $this->kode_reseller = $data->kode_reseller;
        $this->saldoAwal = $data->saldo;
    }

    public function update()
    {
        $this->validate([
            'nominal' => 'numeric'
        ]);
        try {
            Reseller::where('id', $this->id)->update([
                'saldo' => $this->saldoAwal + $this->nominal
            ]);
            $this->dispatch('berhasil', 'Saldo ' . $this->name . ' berhasil di tambah');
            $this->dispatch('modal-close');
        } catch (\Exception $e) {

        }
    }

    public function showPassword($id)
    {
        $data = Reseller::where('id', $id)->first();
        $this->id = $id;
        $this->name = $data->name;
        $this->kode_reseller = $data->kode_reseller;
    }

    public function changePassword()
    {
        $this->validate([
            'password' => 'required|min:6'
        ]);
        try {
            Reseller::where('id', $this->id)->update([
                'password' => bcrypt($this->password)
            ]);
            $this->dispatch('berhasil', 'Password ' . $this->name . ' berhasil di ubah');
            $this->dispatch('modal-password-close');
        } catch (\Exception $e) {

        }
    }

    public function render()
    {
        return view('livewire.realm.user', [
            'data' => Reseller::orderBy('id', 'asc')->where('role_id', 2)->cursorPaginate(10)
        ]);
    }
}

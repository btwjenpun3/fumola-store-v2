<?php

namespace App\Livewire\Realm;

use App\Http\Controllers\RedisController;
use App\Models\Game;
use App\Models\Harga;
use Livewire\Component;
use Illuminate\Support\Facades\Cache;

class Produk extends Component
{
    public $id, $nama, $harga;

    public $modal = [];
    public $profit = [];
    public $profit_reseller = [];

    public $items = [];
    public $reseller = [];    

    public function status($id, $status) 
    {
        switch ($status) {
            case 1:
                Game::where('id', $id)->update(['status' => 1]);
                $this->dispatch('berhasil', 'Ubah Status Berhasil');
                break;
            case 0:
                Game::where('id', $id)->update(['status' => 0]);
                $this->dispatch('berhasil', 'Ubah Status Berhasil');
                break;
            default:
                $this->dispatch('gagal', 'Gagal!');
        }
    }

    public function show($id)
    {
        $data = Game::where('id', $id)->first();
        $this->id = $id;
        $this->nama = $data->nama;
        $this->harga = $data->harga;                 
        foreach($data->harga as $item) {
            $this->modal[$item->id] = $item->modal;
            $this->profit[$item->id] = $item->profit;
            $this->profit_reseller[$item->id] = $item->profit_reseller;
            $this->items[$item->id] = $item->harga_jual;
            $this->reseller[$item->id] = $item->harga_jual_reseller;
        }
    }

    public function updateHargaJual($id)
    {
        $profit = $this->items[$id] - $this->modal[$id];
        Harga::where('id', $id)->update([
            'harga_jual' => $this->items[$id],
            'profit' => $profit
        ]); 
        $this->profit[$id] = $profit;     
        $this->dispatch('berhasil', 'Harga Jual Berhasil di Ubah');
    }

    public function updateHargaReseller($id)
    {
        $profit = $this->reseller[$id] - $this->modal[$id];
        Harga::where('id', $id)->update([
            'harga_jual_reseller' => $this->reseller[$id],
            'profit_reseller' => $profit
        ]);  
        $this->profit_reseller[$id] = $profit;     
        $this->dispatch('berhasil', 'Harga Reseller Berhasil di Ubah');
    }

    public function ubahStatusHarga($id, $status)
    {
        switch ($status) {
            case 1:                
                Harga::where('id', $id)->update(['status' => 1]);                
                $this->dispatch('berhasil', 'Ubah Status Berhasil');
                break;
            case 0:                
                Harga::where('id', $id)->update(['status' => 0]);                
                $this->dispatch('berhasil', 'Ubah Status Berhasil');
                break;
            default:
                $this->dispatch('gagal', 'Gagal!');
        }
    }


    public function render()
    {        
        return view('livewire.realm.produk', [
            'produk' => Game::orderBy('nama', 'asc')->get()
        ]);
    }
}

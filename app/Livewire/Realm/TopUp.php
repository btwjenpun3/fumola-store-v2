<?php

namespace App\Livewire\Realm;

use App\Models\Game;
use App\Models\Customer;
use App\Models\Harga;
use Livewire\Component;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\GlobalController as CheckId;

class TopUp extends Component
{
    public $slug;

    public $productCode;

    public $userId, $userNickname, $serverId;

    public $playerName;

    public $image;

    public $showCustomerField = false; 

    public $customerField;

    public $password;

    public function mount($slug)
    {
        $this->slug = $slug;
    }

    public function fetchData()
    {
        $game = Game::where('slug', $this->slug)->first();
        return $game;
    }    
    
    public function showImage()
    {
        $data = $this->fetchData();
        $this->image = str_replace('games/', '', $data->slug . '.webp');
    }

    public function checkId($slug)
    {
        $checkId = new CheckId();
        $call = $checkId->cekId($slug, $this->userId, $this->serverId);        
        $result = json_decode($call, true);
        switch($result['status']) {
            case(200):
                $this->playerName = $result['nickname'];
                $this->dispatch('player-found'); 
                break;
            case(400) :
                $this->dispatch('player-not-found'); 
                break;  
        }        
    }

    public function fillCustomer($id)
    {
        $data = Customer::where('id', $id)->first();
        $this->userId = $data->user;
        $this->serverId = $data->server;
        $this->userNickname = $data->nickname;
        $this->dispatch('customer-fill');
    }

    public function topup()
    {
        $this->validate([
            'denom' => 'required',
            'userId' => 'required',
            'serverId' => 'required'
        ]);
        try {
            $data = Harga::where('kode_produk', $this->productCode)->first();
            /////
        } catch (\Exception $e) {
            Log::channel('topup')->error('Terdapat error : ' . $e->getMessage()); 
            $this->dispatch('error', 'Terdapat masalah, harap hubungi Admin! (500)'); 
        }
    }

    public function render()
    {        
        return view('livewire.realm.top-up', [
            'game' => $this->fetchData(),
            'harga' => $this->fetchData()->harga,
            'customers' => $this->fetchData()->customer->where('user_id', auth()->id())
        ]);
    }
}

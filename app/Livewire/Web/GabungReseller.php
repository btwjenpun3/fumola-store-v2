<?php

namespace App\Livewire\Web;

use App\Models\Game;
use App\Models\Harga;
use Livewire\Component;

class GabungReseller extends Component
{
    public $gameId; 
    public $gameName; 
    public $gameSearch;   

    public function getGameId($id)
    {
        $data = Game::where('id', $id)->first('nama');
        $this->gameId = $id;
        $this->gameName = $data->nama;
    }

    public function updatedGameSearch($gameSearch)
    {
        $this->gameSearch = $gameSearch;           
    }

    public function render()
    {
        return view('livewire.web.gabung-reseller', [
            'games' => Game::where('status', 1)->when(isset($this->gameSearch), function ($query) {
                            $query->where('nama', 'LIKE', '%' . $this->gameSearch . '%');
                        })->orderBy('nama', 'asc')->get(),
            'hargas' => Game::with('harga')->where('id', $this->gameId)->first()
        ]);
    }
}

<?php

namespace App\Livewire\Realm;

use Carbon\Carbon;
use App\Http\Controllers\RedisController;
use App\Jobs\GenerateMock;
use App\Models\Game;
use App\Models\Harga;
use Livewire\Component;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Livewire\Attributes\Validate;
use App\Models\GameMethod;
use App\Models\GameMiniInstruction;

class Produk extends Component
{
    use WithFileUploads;

    public $id, $nama, $harga;

    public $nama_produk, $brand_produk, $kategori_produk, $kode_produk, $gambar_produk;

    public $produk_form, $form, $gambar;

    #[Validate('mimes:webp,png|max:128')]
    public $gambar_baru;

    public $id_gambar;
    public $gambarHarga;

    public $tipe = [];

    public $modal = [];
    public $profit = [];
    public $profit_reseller = [];

    public $items = [];
    public $reseller = [];   
    
    public $sync;

    public $infoGame;
    public $methods = []; 
    
    public $miniInstruction;

    public function mount()
    {
        $this->methods[] = '';
    }

    public function addMethod()
    {
        $this->methods[] = '';
    }

    public function save()
    {
        $this->validate([
            'nama_produk'       => 'required',
            'brand_produk'      => 'required',
            'kategori_produk'   => 'required',
            'kode_produk'       => 'required|max:10',
            'gambar_produk'     => 'required|mimes:webp,png|max:128'
        ]);
        try {
            $slug = Str::slug($this->nama_produk, '-');
            $gambar = $this->gambar_produk->storeAs('games', $slug . '.webp', 'public');
            Game::create([
                'nama'       => $this->nama_produk,
                'brand'      => $this->brand_produk,
                'kategori'   => $this->kategori_produk,
                'kode'       => $this->kode_produk,
                'url_gambar' => $gambar,
                'slug'       => $slug,
                'status'     => 0
            ]);
            $this->dispatch('berhasil', 'Game ' . $this->nama_produk . 'berhasil di tambahkan');
            $this->dispatch('close-create-modal');
        } catch (\Exception $e) {     
            Log::channel('produk')->error('Terdapat error : ' . $e->getMessage());       
            $this->dispatch('gagal', 'Produk gagal di tambahkan!');
        }
    }

    public function status($id, $status) 
    {
        switch ($status) {
            case 1:
                Game::where('id', $id)->update(['status' => 1]);
                $this->generateMock();
                $this->dispatch('berhasil', 'Ubah Status Berhasil');
                break;
            case 0:
                Game::where('id', $id)->update(['status' => 0]);
                $this->generateMock();
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
        $this->sync = $data->id;
        $this->nama = $data->nama;                  
        foreach($data->harga as $item) {
            $this->tipe[$item->id] = $item->tipe;
            $this->modal[$item->id] = $item->modal;
            $this->items[$item->id] = $item->harga_jual;
            $this->reseller[$item->id] = $item->harga_jual_reseller;
        }
    }

    public function updateTipe($id)
    {
        Harga::where('id', $id)->update([
            'tipe' => $this->tipe[$id]
        ]);
        $this->dispatch('berhasil', 'Tipe berhasil di ubah');
    }

    public function updateHargaJual($id)
    {
        $data = Harga::where('id', $id)->first();
        $profit = $this->items[$id] - $data->modal;
        $data->update([
            'harga_jual' => $this->items[$id],
            'profit' => $profit
        ]);     
        $this->dispatch('berhasil', 'Harga Jual Berhasil di Ubah');
    }

    public function updateHargaReseller($id)
    {
        $data = Harga::where('id', $id)->first();
        $profit = $this->reseller[$id] - $data->modal;
        Harga::where('id', $id)->update([
            'harga_jual_reseller' => $this->reseller[$id],
            'profit_reseller' => $profit
        ]);       
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

    public function showFileInput($id)
    {
        $this->id_gambar = $id;
        $this->dispatch('showFileInput');
    }

    public function updatedGambarHarga()
    {
        try {
            $carbon = Carbon::now();
            $gambar = $this->gambarHarga->store('produk/' . $carbon->year . '/' . $carbon->month, 'public');
            Harga::where('id', $this->id_gambar)->update([
            'gambar' => $gambar
        ]);
        $this->dispatch('berhasil', 'Upload Berhasil');        
        } catch (\Exception $e) {
            $this->dispatch('berhasil', $e->getMessage());
        }              
    }

    public function sinkronisasi()
    {
        try {
            $data = Game::findOrFail($this->id);        
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
            ])->post('https://api.digiflazz.com/v1/price-list', [
                'cmd' => 'prepaid',
                'username' => env('DIGIFLAZZ_USERNAME'),
                'sign' => md5(env('DIGIFLAZZ_USERNAME') . env('DIGIFLAZZ_SECRET_KEY') . 'pricelist')
            ]);        
            if (!$response->successful()) {
                throw new \Exception('Terdapat masalah saat sinkronisasi produk');
            }       
            $jsonDecode = $response->json();
            $produk = Harga::where('game_id', $data->id)->get();        
            foreach ($jsonDecode['data'] as $item) {
                if ($item['brand'] !== $data->brand) {
                    continue;
                }        
                $harga = Harga::where('kode_produk', $item['buyer_sku_code'])->first();
                if($harga) {                            
                    if ($produk->contains('kode_produk', $item['buyer_sku_code'])) {
                        if ($item['buyer_product_status'] && $item['seller_product_status']) {
                            $status = 1;
                        } elseif ($item['buyer_product_status'] && !$item['seller_product_status']) {
                            $status = 3;
                        }
                    }  
                } else {
                    $status = 0;
                }    
                if ($status === 0) {
                    Harga::create([
                            'kode_produk' => $item['buyer_sku_code'],                        
                            'game_id' => $data->id,
                            'nama_produk' => $item['product_name'],
                            'tipe' => $item['type'],
                            'seller_name' => $item['seller_name'],
                            'deskripsi' => $item['desc'],
                            'gambar' => 'produk/ml-diamond.webp',
                            'modal' => $item['price'],
                            'harga_jual' => 0,
                            'profit' => 0 - $item['price'],                            
                            'harga_jual_reseller' => 0,
                            'profit_reseller' => 0 - $item['price'],
                            'start_cut_off' => $item['start_cut_off'],
                            'end_cut_off' => $item['end_cut_off'],
                            'status' => 0
                        ]);  
                } else {
                    Harga::where('kode_produk', $item['buyer_sku_code'])->update([
                        'game_id' => $data->id,
                        'seller_name' => $item['seller_name'],
                        'deskripsi' => $item['desc'],
                        'modal' => $item['price'],
                        'profit' => $harga->harga_jual - $item['price'],
                        'profit_reseller' => $harga->harga_jual_reseller - $item['price'],
                        'start_cut_off' => $item['start_cut_off'],
                        'end_cut_off' => $item['end_cut_off'],
                        'status' => $status
                    ]);
                }
            }        
            $this->dispatch('close-sync-modal');
            $this->dispatch('berhasil', 'Sinkron produk berhasil');            
            $this->dispatch('open-update-modal');                    
        } catch (\Exception $e) {
            $this->dispatch('gagal', $e->getMessage());
        }
    }

    public function showMethod($id)
    {
        $data = Game::where('id', $id)->first();
        $this->id = $data->id;
        $this->infoGame = $data->nama;
        $this->miniInstruction = isset($data->miniInstruction->mini_instruction) ? $data->miniInstruction->mini_instruction : null;
        if(count($data->methods)) {
            $this->reset('methods');
            foreach($data->methods as $d) {
                $this->methods[$d->id] = $d->method;
            } 
        } else {                
            $this->reset('methods');
            $this->addMethod();
        } 
    }

    public function saveMethod()
    {
        $data = GameMethod::where('game_id', $this->id)->get();
        if(count($data) > 0) {
            
        } else {
            foreach($this->methods as $method) {
                GameMethod::create([
                    'game_id' => $this->id,
                    'method' => $method
                ]);
            }
            $this->dispatch('berhasil', 'Ubah Method berhasil');
        } 
    }

    public function updateMiniInstruction()
    {
        GameMiniInstruction::where('game_id', $this->id)->update([
            'mini_instruction' => $this->miniInstruction
        ]);
        $this->dispatch('berhasil', 'Update Mini Instruction berhasil');
    }

    public function saveMiniInstruction()
    {
        GameMiniInstruction::create([
            'game_id' => $this->id,
            'mini_instruction' => $this->miniInstruction
        ]);
        $this->dispatch('berhasil', 'Ubah Mini Instruction berhasil');
    }

    public function setting($id)
    {
        $data = Game::where('id', $id)->first();
        $this->id = $id;
        $this->form = $data->form;   
        $this->produk_form = $data->nama;    
        $this->gambar = $data->url_gambar;               
    }

    public function saveSetting()
    {               
        $data = Game::where('id', $this->id)->update([
            'form' => $this->form
        ]);                   
        if(isset($this->gambar_baru)) {
            $data = Game::where('id', $this->id)->first(); 
            $gambar = $this->gambar_baru->storeAs('games', $data->slug . '.webp', 'public');
            $data->update([
                'url_gambar' => $gambar
            ]);
        } 
        $this->dispatch('berhasil', 'Ubah Setting berhasil');
        $this->dispatch('close-setting-modal');
    }

    public function render()
    {        
        return view('livewire.realm.produk', [
            'produk' => Game::orderBy('nama', 'asc')->get(),
            'hargas' => Game::when(isset($this->id), function ($query) {
                            $data = $query->where('id', $this->id)->first();
                            return $data->harga;
                        })
        ]);
    }

    public function generateMock()
    {
        $data = Game::orderBy('nama', 'asc')->where('status', 1)->get();
        $path = public_path('mock/categories.json');
        $mock = [];  
        $all = []; 
        $game = [];  
        $pulsa = [];
        $voucher = [];  
        foreach($data as $g) {
            $all[] = [
                '_id' => $g->id,
                'title' => $g->nama,
                'production' => $g->brand,
                'image' => asset(Storage::url($g->url_gambar)),
                'url' => '/top-up/' . $g->slug
            ];
            if($g->kategori === 'Games') {            
                $game[] = [
                    '_id' => $g->id,
                    'title' => $g->nama,
                    'production' => $g->brand,
                    'image' => asset(Storage::url($g->url_gambar)),
                    'url' => '/top-up/' . $g->slug
                ];
            } elseif ($g->kategori === 'Voucher') {          
                $voucher[] = [
                    '_id' => $g->id,
                    'title' => $g->nama,
                    'production' => $g->brand,
                    'image' => asset(Storage::url($g->url_gambar)),
                    'url' => '/top-up/' . $g->slug
                ];
            } elseif ($g->kategori === 'Pulsa') {          
                $pulsa[] = [
                    '_id' => $g->id,
                    'title' => $g->nama,
                    'production' => $g->brand,
                    'image' => asset(Storage::url($g->url_gambar)),
                    'url' => '/top-up/' . $g->slug
                ];
            }
        } 
        $mock[] = [
            '_id' => 1,
            'all' => $all
        ]; 
        $mock[] = [
            '_id' => 2,
            'mlbb' => $game
        ];
        $mock[] = [
            '_id' => 3,
            'mobile' => $voucher
        ];
        $mock[] = [
            '_id' => 4,
            'pc' => $pulsa
        ];          
        $jsonData = json_encode($mock, JSON_PRETTY_PRINT);   
        file_put_contents($path, $jsonData);
    }
}

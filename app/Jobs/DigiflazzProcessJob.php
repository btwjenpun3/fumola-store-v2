<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;
use App\Models\Digiflazz;
use Illuminate\Support\Facades\Log;
use App\Events\TopUpEvent;

class DigiflazzProcessJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public $invoiceData;
    public $kodeProduk;
    public $nomorInvoice;
    public $customerNo;

    public function __construct($invoiceData, $kodeProduk, $nomorInvoice, $customerNo,)
    {
        $this->invoiceData = $invoiceData;
        $this->kodeProduk = $kodeProduk;
        $this->nomorInvoice = $nomorInvoice;
        $this->customerNo = $customerNo;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $digiflazz = Http::withHeaders([
            'Content-Type' => 'application/json',
        ])->post('https://api.digiflazz.com/v1/transaction', [
            'username' => env('DIGIFLAZZ_USERNAME'),
            'buyer_sku_code' => $this->kodeProduk,
            'customer_no' => $this->customerNo,
            'ref_id' => $this->nomorInvoice,
            'sign' => md5(env('DIGIFLAZZ_USERNAME') . env('DIGIFLAZZ_SECRET_KEY') . $this->nomorInvoice)
        ]);
        if($digiflazz->successful()) {
            if(isset($digiflazz['data']['wa'])) {
                $wa = $digiflazz['data']['wa'];
            } else {
                $wa = 'Kosong';
            }
            if(isset($digiflazz['data']['tele'])) {
                $tele = $digiflazz['data']['tele'];
            } else {
                $tele = 'Kosong';
            }
            $updateDigiflazz = Digiflazz::create([
                'saldo_terakhir' => $digiflazz['data']['buyer_last_saldo'],
                'saldo_terpotong' => $digiflazz['data']['price'],
                'message' => $digiflazz['data']['message'],
                'seller_telegram' => $tele,
                'seller_whatsapp' => $wa,
                'status' => $digiflazz['data']['status']
            ]);
            $this->invoiceData->update([
                'digiflazz_id' => $updateDigiflazz->id
            ]);     
            // event(new TopUpEvent($this->nomorInvoice, 'Pembayaran Berhasil'));                      
        } else {
            Log::channel('digiflazz')->error('Gagal:' . json_decode($digiflazz->getBody()->getContents(), true));            
        }
    }
}

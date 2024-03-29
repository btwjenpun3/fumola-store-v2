<?php

namespace App\Http\Controllers\Api;

use App\Events\TopUpEvent;
use App\Http\Controllers\Controller;
use App\Jobs\DigiflazzProcessJob;
use Illuminate\Http\Request;
use App\Models\Invoice;
use App\Models\Digiflazz;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class XenditController extends Controller
{
    public function handleCallBackEWallet(Request $request)
    {
        try {
            $header = $request->header('x-callback-token');
            if($header == env('XENDIT_CALLBACK_TOKEN')) {
                $response = $request->all();
                if($response['data']['status'] == "SUCCEEDED") {
                    $invoice = Invoice::where('xendit_invoice_id', $response['data']['id'])->first();
                    if(isset($invoice)) {
                        $invoice->update([
                            'status' => 'PAID',
                            'webhook_id' => $request->header('webhook-id')
                        ]);
                        event(new TopUpEvent($invoice->nomor_invoice, 'Pembayaran berhasil, harap tunggu kami sedang memproses pesanan kamu'));
                        dispatch(new DigiflazzProcessJob($invoice, $invoice->harga->kode_produk, $invoice->nomor_invoice, $invoice->customer));
                        return response()->json(200);                         
                    } else {
                        return response()->json([                            
                            'error' => 'Invoice not found'
                        ], 404);
                    }
                } else {
                    return redirect()->route('invoice.index', ['id' => $response['data']['reference_id']])->with(['message' => 'Pembayaran kamu sedang Pending. Harap menunggu beberapa saat dan refresh halaman ini atau hubungi Admin']);
                }
            } else {
                return response()->json([
                    'error' => 'Unauthorized'
                ], 401);
            }
        } catch (\Exception $e) {
            Log::error('Gagal:' . $e->getMessage());
            return response()->json([
                'error' => 'Unknown Error'
            ], 401);
        }
    }

    public function handleCallBackQris(Request $request)
    {
        try {
            $header = $request->header('x-callback-token');
            if($header == env('XENDIT_CALLBACK_TOKEN')) {
                $response = $request->all();
                if($response['data']['status'] == "SUCCEEDED") {
                    $invoice = Invoice::where('xendit_invoice_id', $response['data']['qr_id'])->first();
                    if(isset($invoice)) {
                        $invoice->update([
                            'status' => 'PAID',
                            'webhook_id' => $request->header('webhook-id')
                        ]);
                        event(new TopUpEvent($invoice->nomor_invoice, 'Pembayaran berhasil, harap tunggu kami sedang memproses pesanan kamu')); 
                        dispatch(new DigiflazzProcessJob($invoice, $invoice->harga->kode_produk, $invoice->nomor_invoice, $invoice->customer));
                        return response()->json(200); 
                    } else {
                        return response()->json([
                            'error' => 'Invoice not found'
                        ], 404);
                    }
                } else {
                    return redirect()->route('invoice.index', ['id' => $response['data']['reference_id']])->with(['message' => 'Pembayaran kamu sedang Pending. Harap menunggu beberapa saat dan refresh halaman ini atau hubungi Admin']);
                }
            } else {
                return response()->json([
                    'error' => 'Unauthorized'
                ], 401);
            }
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Unknown Error'
            ], 401);
        }
    }

    public function handleCallBackVa(Request $request)
    {
        try {
            $header = $request->header('x-callback-token');
            if($header == env('XENDIT_CALLBACK_TOKEN')) {
                $response = $request->all();
                $invoice = Invoice::where('nomor_invoice', $response['external_id'])->first();
                if(isset($invoice)) {
                    if($response['external_id'] == $invoice->nomor_invoice) {
                        $invoice->update([                            
                            'status' => 'PAID',
                            'webhook_id' => $request->header('webhook-id')
                        ]);
                        $invoice->va()->update([
                            'xendit_va_payment_id' => $response['payment_id'],
                        ]);
                        event(new TopUpEvent($invoice->nomor_invoice, 'Pembayaran berhasil, harap tunggu kami sedang memproses pesanan kamu'));
                        dispatch(new DigiflazzProcessJob($invoice, $invoice->harga->kode_produk, $invoice->nomor_invoice, $invoice->customer));
                        return response()->json(200); 
                    } else {
                        return response()->json([
                            'error' => 'Invoice not match'
                        ], 401);
                    }
                } else {
                    return response()->json([
                        'error' => 'Invoice not found'
                    ], 404);
                }                
            } else {
                return response()->json([
                    'error' => 'Unauthorized'
                ], 401);
            }
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Unknown Error'
            ], 401);
        }
    }

    public function handleCallBackOutlet(Request $request)
    {
        try {
            $header = $request->header('x-callback-token');
            if($header == env('XENDIT_CALLBACK_TOKEN')) {
                $response = $request->all();
                $invoice = Invoice::where('nomor_invoice', $response['external_id'])->first();
                if(isset($invoice)) {
                    if($response['status'] == 'COMPLETED') {
                        $invoice->update([                            
                            'status' => 'PAID',
                            'webhook_id' => $request->header('webhook-id')
                        ]);
                        $invoice->outlet()->update([
                            'payment_id' => $response['payment_id'],
                            'fixed_payment_code_payment_id' => $response['fixed_payment_code_payment_id'],
                            'fixed_payment_code_id' => $response['fixed_payment_code_id']                            
                        ]);
                        event(new TopUpEvent($invoice->nomor_invoice, 'Pembayaran berhasil, harap tunggu kami sedang memproses pesanan kamu'));
                        dispatch(new DigiflazzProcessJob($invoice, $invoice->harga->kode_produk, $invoice->nomor_invoice, $invoice->customer));
                        return response()->json(200); 
                    } else {
                        return response()->json([
                            'error' => 'Invoice not match'
                        ], 401);
                    }
                } else {
                    return response()->json([
                        'error' => 'Invoice not found'
                    ], 404);
                }                
            } else {
                return response()->json([
                    'error' => 'Unauthorized'
                ], 401);
            }
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Unknown Error'
            ], 401);
        }
    }
}

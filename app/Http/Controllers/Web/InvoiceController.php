<?php

namespace App\Http\Controllers\Web;

use App\Models\Invoice;
use App\Http\Controllers\Controller;
use App\Http\Controllers\GlobalController;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index(Request $request)
    {
        $call = new GlobalController();
        $data = Invoice::where('nomor_invoice', $request->id)->first();
        return view('web.pages.invoice.invoice', [
            'data' => $data,
            'call' => $call
        ]);
    }
}

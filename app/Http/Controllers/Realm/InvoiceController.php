<?php

namespace App\Http\Controllers\Realm;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function web()
    {
        return view('realm.pages.invoiceweb');
    }

    public function reseller()
    {
        return view('realm.pages.invoicereseller');
    }

    public function user()
    {
        return view('realm.pages.invoiceuser');
    }
}

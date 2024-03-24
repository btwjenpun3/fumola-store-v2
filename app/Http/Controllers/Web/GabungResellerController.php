<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GabungResellerController extends Controller
{
    public function index()
    {
        return view('web.pages.gabung-reseller.gabung-reseller');
    }
}

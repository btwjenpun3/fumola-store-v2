<?php

namespace App\Http\Controllers\Realm;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TopUpController extends Controller
{
    public function index(Request $request)
    {
        return view('realm.pages.topup', [
            'slug' => $request->slug
        ]);
    }    
}

<?php

namespace App\Http\Controllers\Realm;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return view('realm.pages.user');
    }
}

<?php

use App\Http\Controllers\Api\DigiflazzController;
use App\Http\Controllers\Api\XenditController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/xendit/callback/ewallet', [XenditController::class, 'handleCallBackEWallet']);

Route::post('/xendit/callback/qris', [XenditController::class, 'handleCallBackQris']);

Route::post('/xendit/callback/va', [XenditController::class, 'handleCallBackVa']);

Route::post('/xendit/callback/outlet', [XenditController::class, 'handleCallBackOutlet']);

Route::post('/digiflazz/callback', [DigiflazzController::class, 'handleCallBack']);

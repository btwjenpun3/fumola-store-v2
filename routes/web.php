<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GenerateProductController;
use App\Http\Controllers\Realm\DashboardController;
use App\Http\Controllers\Realm\InvoiceController;
use App\Http\Controllers\Realm\PaymentController;
use App\Http\Controllers\Realm\ProdukController;
use App\Http\Controllers\Realm\ReportController;
use App\Http\Controllers\Realm\ReportProfitController;
use App\Http\Controllers\Realm\TopUpController;
use App\Http\Controllers\Realm\TransaksiController;
use App\Http\Controllers\Realm\UserController;
use App\Http\Controllers\RedisController;
use App\Http\Controllers\Web\OrderController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

/**
 * Route untuk Web 
 */

 Route::get('/', [RedisController::class, 'webHomePage']);

 Route::prefix('/top-up')
    ->name('top-up.')
    ->controller(OrderController::class)
    ->group(function () {
        Route::get('/', 'index')->name('index');
    });


 Route::prefix('/generate')
    ->name('generate.')
    ->controller(GenerateProductController::class)
    ->group(function () {
        Route::get('/', 'generate')->name('generate');
    });


/**
 * Route untuk Realm 
 */

Route::prefix('/auth')
    ->name('auth.')
    ->controller(AuthController::class)
    ->middleware('guest')
    ->group(function () {
        Route::get('/login', 'login')->name('login');
    });

Route::prefix('/realm/dashboard')
    ->name('dashboard.')
    ->controller(DashboardController::class)
    ->middleware('auth')
    ->group(function () {
        Route::get('/', 'index')->name('index');
    });

Route::prefix('/realm/produk')
    ->name('produk.')
    ->controller(ProdukController::class)
    ->middleware('auth')
    ->group(function () {
        Route::get('/', 'index')->name('index');
    });

Route::prefix('/realm/topup')
    ->name('topup.')
    ->controller(TopUpController::class)
    ->middleware('auth')
    ->group(function () {
        Route::get('/{slug}', 'index')->name('index');
    });

Route::prefix('/realm/invoice')
    ->name('invoice.')
    ->controller(InvoiceController::class)
    ->middleware('auth')
    ->group(function () {
        Route::get('/web', 'web')->name('web');
        Route::get('/reseller', 'reseller')->name('reseller');
        Route::get('/user', 'user')->name('user');
    });

Route::prefix('/realm/transaksi')
    ->name('transaksi.')
    ->controller(TransaksiController::class)
    ->middleware('auth')
    ->group(function () {
        Route::get('/', 'index')->name('index');
    });

Route::prefix('/realm/payment')
    ->name('payment.')
    ->controller(PaymentController::class)
    ->middleware('auth')
    ->group(function () {
        Route::get('/', 'index')->name('index');
    });

Route::prefix('/realm/report')
    ->name('report.')
    ->controller(ReportController::class)
    ->middleware('auth')
    ->group(function () {
        Route::get('/profit', 'profit')->name('profit');
    });

Route::prefix('/realm/user')
    ->name('user.')
    ->controller(UserController::class)
    ->middleware('auth')
    ->group(function () {
        Route::get('/', 'index')->name('index');
    });
    
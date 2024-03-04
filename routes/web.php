<?php

use App\Http\Controllers\Realm\AuthController;
use App\Http\Controllers\Realm\DashboardController;
use App\Http\Controllers\Realm\ProdukController;
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
 * Route untuk Realm 
 */

Route::prefix('/auth')
    ->name('auth.')
    ->controller(AuthController::class)
    ->middleware('guest')
    ->group(function () {
        Route::get('/', 'index')->name('index');
    });

Route::prefix('/realm/dashboard')
    ->name('dashboard.')
    ->controller(DashboardController::class)
    ->group(function () {
        Route::get('/', 'index')->name('index');
    });

Route::prefix('/realm/produk')
    ->name('produk.')
    ->controller(ProdukController::class)
    ->group(function () {
        Route::get('/', 'index')->name('index');
    });
    
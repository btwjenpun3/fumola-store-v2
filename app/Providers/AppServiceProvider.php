<?php

namespace App\Providers;

use App\Models\Game;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $menus = Game::orderBy('nama', 'asc')->where('status', 1)->get();
        view()->share('menus', $menus);
    }
}

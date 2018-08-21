<?php

namespace Spatie\BackupTool;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;
use Spatie\BackupTool\Http\Middleware\Authorize;
use Spatie\BackupTool\Middleware\Authenticate;

class BackupToolServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'BackupTool');

        $this->app->booted(function () {
            $this->routes();
        });
    }

    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova', Authorize::class])
            ->prefix('/nova-vendor/spatie/backup-tool')
            ->group(
                __DIR__ . '/../routes/api.php'
            );
    }
}

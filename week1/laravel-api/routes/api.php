<?php

use Illuminate\Support\Facades\Route;

Route::get('/hello', function () {
    return response()->json([
        "message" => "hello from laravel",
        "time" => now()->toDateTimeString(),
    ]);
});

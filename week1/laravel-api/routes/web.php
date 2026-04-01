<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/hello', function () {
    return response()->json([
        "message" => "hello from laravel",
        "time" => now()->toDateTimeString(),
    ]);
});

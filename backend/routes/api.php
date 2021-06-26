<?php

use App\Http\Controllers\HousesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/houses/create', [HousesController::class, 'store']);

Route::get('/houses', [HousesController::class, 'create']);

Route::get('/houses/{id}', [HousesController::class, 'show']);

Route::put('/houses/edit/{id}', [HousesController::class, 'update']);

Route::delete('/houses/delete/{id}', [HousesController::class, 'destroy']);

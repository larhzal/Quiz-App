<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizCategorieContoller;
use App\Http\Controllers\UsersContoller;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/questions', [QuestionController::class, 'showQuestions']);
//Route::get('/questions/{categoryId}', [QuestionController::class, 'showId']);
Route::get('/quiz', [QuizCategorieContoller::class, 'showquiz']);
Route::get('/user', [UsersContoller::class, 'showUser']);
Route::post('/addNewQuetion', [QuestionController::class, 'addQuestion']);
Route::post('/updateQuestion{id}', [QuestionController::class, 'updateQuestion']);
// Example route definition for fetching CSRF token cookie
Route::get('/csrf-cookie', function (Request $request) {
    return response()->json(['csrf_token' => csrf_token()]);
});


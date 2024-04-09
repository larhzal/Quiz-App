<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quiz;
class QuizCategorieContoller extends Controller
{
    public function showquiz()
    {
        $quiz = Quiz::all();

        return response()->json([
            'results' => $quiz
        ],200);

    }
}

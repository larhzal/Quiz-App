<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FormEntry;
use App\Models\Question;

class QuestionController extends Controller
{

    public function showQuestions()
    {

        // return DB::select("select * from questions");

        // // Retrieve data from the database
        $question = Question::all();

        return response()->json([
            'results' => $question
        ],200);

    }
    public function addQuestion(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'question' => 'required | string',
            'option1' => 'required | string',
            'option2' => 'required | string',
            'option3' => 'required | string',
            'option4' => 'required | string',
            'correct_answer' => 'required | string',
            'id_quiz' => 'required | string'
        ]);

        // Create a new instance of the FormEntry model and fill it with validated data
        $formEntry = new FormEntry();
        $formEntry->question = $validatedData['question'];
        $formEntry->option1 = $validatedData['option1'];
        $formEntry->option2 = $validatedData['option2'];
        $formEntry->option3 = $validatedData['option3'];
        $formEntry->option4 = $validatedData['option4'];
        $formEntry->correct_answer = $validatedData['correct_answer'];
        $formEntry->id_quiz = $validatedData['id_quiz'];

        // Save the form entry to the database
        $formEntry->save();

        // Return a success response
        return response()->json(['message' => 'Form submitted successfully'], 201);
    }
}

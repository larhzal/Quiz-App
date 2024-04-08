<?php

namespace App\Http\Controllers;

use App\Models\Question; 
use App\Http\Requests\AddQuestionRequest;
//use Illuminate\Support\Facades\DB;
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

    public function showId($id){
        //user details
        $question_id = Question::find($id);
        if(!$question_id){
            return response()->json([
                'message' => 'Question not found'
            ],404);
        }
        return response()->json([
            'question' => $question_id
        ],200);
    }

    public function addQuestion(AddQuestionRequest $request){
        try{
            //add new question
            Question::create([
                'question' => $request->question,
                'option1' => $request->option1,
                'option2' => $request->option2, 
                'option3' => $request->option3,
                'option4' => $request->option4
            ]);
            //return Json response
            return response()->json([
                'message' => 'Question added syccesfuly.'
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'message' => "Something went wrong!"
            ],500);
        }
    }

    public function updateQuestion(AddQuestionRequest $request, $id){
        try{
            //find qestion
            $question = Question::find($id);
            if($question){
                return $question()->json([
                    'message'=>'User Not Found.'
                  ],404);
            }
            $question->question = $request->question;
            $question->option1 = $request->option1;
            $question->option2 = $request->option2;
            $question->option3 = $request->option3;
            $question->option4 = $request->option4;

            //updating
            $question->save();

            //return json response
            return response()->json([
                'message' => "Question updated successfully."
            ],200);
        } catch(\Exception $e){
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ],500);
        }
    }
    
}

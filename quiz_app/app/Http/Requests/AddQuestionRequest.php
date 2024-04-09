<?php

namespace App\Http\Requests;

use App\Models\Question;
use Illuminate\Foundation\Http\FormRequest;

class AddQuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
       if(request()->isMethod('post')){
        return[
            'question' => 'required | string',
            'option1' => 'required | string',
            'option2' => 'required | string',
            'option3' => 'required | string',
            'option4' => 'required | string',
            'correct_answer' => 'required | string'
        ];
       } else{
        return[
            'question' => 'required | string',
            'option1' => 'required | string',
            'option2' => 'required | string',
            'option3' => 'required | string',
            'option4' => 'required | string',
            'correct_answer' => 'required | string'
        ];
       }
    }

    public function messages()
    {
        if(request()->isMethod('post')) {
            return [
                'question' => 'Question is required',
                'option1' => 'Option 1 is required',
                'option2' => 'Option 2 is required',
                'option3' => 'Option 3 is required',
                'option4' => 'Option 4 is required',
                'correct_answer' => 'Correct answer is required'
            ];
        } else {
            return [
                'question' => 'Question is required',
                'option1' => 'Option 1 is required',
                'option2' => 'Option 2 is required',
                'option3' => 'Option 3 is required',
                'option4' => 'Option 4 is required',
                'correct_answer' => 'Correct answer is required'
            ];
        }
    }


}

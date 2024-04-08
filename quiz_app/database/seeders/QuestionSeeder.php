<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Question;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Question::create([
            'question' => 'Quel est le resultat de 5 x 3',
            'option1' =>'25',
            'option2' =>'15',
            'option3' =>'12',
            'option4' =>'18',
            'correct_answer' => '15',
            'id_quiz' => 1,
        ]);
        
        Question::create([
            'question' => 'Quel est le resultat de 8 x 8',
            'option1' =>'64',
            'option2' =>'56',
            'option3' =>'62',
            'option4' =>'72',
            'correct_answer' => '64',
            'id_quiz' => 1,
        ]);
        
        Question::create([
            'question' => 'Quel est le resultat de 5 x 3 x 2',
            'option1' =>'30',
            'option2' =>'15',
            'option3' =>'25',
            'option4' =>'35',
            'correct_answer' => '30',
            'id_quiz' => 1,
        ]);
        
        Question::create([
            'question' => 'Quel est le resultat de 9 x 3',
            'option1' =>'27',
            'option2' =>'21',
            'option3' =>'28',
            'option4' =>'24',
            'correct_answer' => '27',
            'id_quiz' => 1,
        ]);
        

    }
}

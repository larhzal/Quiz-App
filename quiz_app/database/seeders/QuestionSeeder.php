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
            'question' => 'Si j\'ai 5 billes et mon ami m\'en donne 4 de plus, combien de billes ai-je maintenant?',
            'option1' =>'6',
            'option2' =>'7',
            'option3' =>'8',
            'option4' =>'9',
            'correct_answer' => '9',
            'id_quiz' => 2,
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
            'question' => 'Combien font 10 - 5 - 6?',
            'option1' => '1',
            'option2' => '0',
            'option3' => '5',
            'option4' => 'impossible',
            'correct_answer' => 'impossible',
            'id_quiz' => 2,
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

        Question::create([
            'question' => 'Quel est le nom de la forme qui a 4 côtés égaux et 4 angles droits?',
            'option1' =>'Carré',
            'option2' =>'Rectangle',
            'option3' =>'Triangle',
            'option4' =>'Cercle',
            'correct_answer' => 'Carré',
            'id_quiz' => 4,
        ]);

        Question::create([
            'question' => 'Combien de côtés a un rectangle ?',
            'option1' => '3',
            'option2' => '4',
            'option3' => '5',
            'option4' => '6',
            'correct_answer' => '4',
            'id_quiz' => 1,
        ]);

        Question::create([
            'question' => 'Combien font 20 - 5 - 8 ?',
            'option1' => '9',
            'option2' => '8',
            'option3' => '5',
            'option4' => '7',
            'correct_answer' => '7',
            'id_quiz' => 2,
        ]);

        Question::create([
            'question' => 'Si j\'ai 2 boîtes de crayons, et chaque boîte a 8 crayons, combien de crayons ai-je au total?',
            'option1' =>'10',
            'option2' =>'14',
            'option3' =>'16',
            'option4' =>'18',
            'correct_answer' => '16',
            'id_quiz' => 1,
        ]);
        
        Question::create([
            'question' => 'Combien de côtés a un triangle?',
            'option1' =>'3',
            'option2' =>'4',
            'option3' =>'5',
            'option4' =>'6',
            'correct_answer' => '3',
            'id_quiz' => 4,
        ]);

        Question::create([
            'question' => 'Si j\'ai 7 pommes et j\'en achète 3 de plus, combien de pommes ai-je en tout?',
            'option1' =>'10',
            'option2' =>'12',
            'option3' =>'14',
            'option4' =>'16',
            'correct_answer' => '10',
            'id_quiz' => 2,
        ]);

        Question::create([
            'question' => 'Quel est le nom de la forme avec six côtés ?',
            'option1' => 'Hexagone',
            'option2' => 'Pentagone',
            'option3' => 'Octogone',
            'option4' => 'Hexadécagone',
            'correct_answer' => 'Hexagone',
            'id_quiz' => 1,
        ]);

        Question::create([
            'question' => 'Si j`\'ai 5 billes et mon ami m\'en donne 4 de plus, combien de billes ai-je maintenant?',
            'option1' =>'6',
            'option2' =>'7',
            'option3' =>'8',
            'option4' =>'9',
            'correct_answer' => '9',
            'id_quiz' => 2,
        ]);

        Question::create([
            'question' => 'Quel est le nom de la forme qui a 3 côtés?',
            'option1' =>'Rectangle',
            'option2' =>'Cercle',
            'option3' =>'Triangle',
            'option4' =>'Carré',
            'correct_answer' => 'Triangle',
            'id_quiz' => 4,
        ]);

        Question::create([
            'question' => 'Combien de côtés a un cercle?',
            'option1' =>'3',
            'option2' =>'4',
            'option3' =>'Infini',
            'option4' =>'Aucun',
            'correct_answer' => 'Aucun',
            'id_quiz' => 4,
        ]);

        Question::create([
            'question' => 'Quelle est la forme d\'une roue ?',
            'option1' => 'Triangle',
            'option2' => 'Carré',
            'option3' => 'Cercle',
            'option4' => 'Pentagone',
            'correct_answer' => 'Cercle',
            'id_quiz' => 1,
        ]);

        Question::create([
            'question' => 'Quel est le résultat de 4 x 6?',
            'option1' =>'24',
            'option2' =>'18',
            'option3' =>'10',
            'option4' =>'30',
            'correct_answer' => '24',
            'id_quiz' => 1,
        ]);

        Question::create([
            'question' => 'Si je multiplie 7 par 3, quel est le résultat?',
            'option1' =>'10',
            'option2' =>'20',
            'option3' =>'21',
            'option4' =>'25',
            'correct_answer' => '21',
            'id_quiz' => 1,
        ]);

        Question::create([
            'question' => 'Quelle est la différence entre 15 et 7 ?',
            'option1' => '6',
            'option2' => '8',
            'option3' => '9',
            'option4' => '10',
            'correct_answer' => '8',
            'id_quiz' => 2,
        ]);



        

    }
}

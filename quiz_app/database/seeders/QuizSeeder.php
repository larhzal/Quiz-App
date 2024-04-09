<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Quiz;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Quiz::create([
            'description' => 'La Multiplication',
        ]);
        
        Quiz::create([
            'description' => 'L\'addition',
        ]);
        
        Quiz::create([
            'description' => 'La soustraction',
        ]);

        Quiz::create([
            'description' => 'La geometrie',
        ]);


    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $table = 'questions';

    protected $primaryKey = 'id'; 

    public $timestamps = true;
    protected $fillable = [
        'question',
        'option1',
        'option2',
        'option3',
        'option4',
        'correct_answer',
        'id_quiz',
    ];

    public function quiz()
    {
        return $this->belongsTo(Quiz::class, 'id_quiz');
    }
}

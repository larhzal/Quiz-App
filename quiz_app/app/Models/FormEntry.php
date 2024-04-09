<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class FormEntry extends Model
{
    protected $fillable = ['question', 'option1', 'option2', 'option3', 'option4', 'correct_answer'];
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UsersContoller extends Controller
{
    public function showUser()
    {
        $users = User::where('id', '>', 1)->get();

        return response()->json([
            'results' => $users
        ], 200);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'admin',
            'email' => 'admin@example.com',
            'password' => 'adminadmin',
        ]);

        User::create([
            'name' => 'oumaima',
            'email' => 'oumaiam@example.com',
            'password' => '125478',
        ]);

        User::create([
            'name' => 'salsabil',
            'email' => 'salsabil@example.com',
            'password' => '987456',
        ]);
    }
}

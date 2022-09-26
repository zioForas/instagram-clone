<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Validation\ValidationException;

final class Login
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
    $user = User::where('email', $args['email'])->first();
        
    if (! $user || !Hash::check($args['password'], $user->password)) {
        throw ValidationException::withMessages([
                'email' => ['Your email or password is incorrect.']
        ]);

        }
        return $user->createToken('myapptoken')->plainTextToken;
    } 
}

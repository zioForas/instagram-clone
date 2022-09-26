<?php

namespace App\GraphQL\Mutations;

use App\Models\PostComment;
use Illuminate\Support\Facades\Auth;

final class UpdateUser
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $user = Auth::user();

        if (! $user) {
            throw new \RuntimeException('Current user not found.');
        }

        $user->update($args);

        return $user;
    }
}

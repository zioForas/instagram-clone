<?php

namespace App\GraphQL\Queries;

use Illuminate\Support\Facades\Auth;
use App\Models\Post;

final class Feed
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
        // cojemos 10 posts de la base de datos 
     return Post::where('user_id', '!=', $user->id)->get()->sortByDesc('created_at')->take(10);
    }
}

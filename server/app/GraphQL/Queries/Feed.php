<?php

namespace App\GraphQL\Queries;

use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class Feed
{
    public function __invoke($_, array $args)
    {
        $user = Auth::user();

        if (! $user) {
            throw new \RuntimeException('Current user not found.');
        }

        return Post::where('user_id', '!=', $user->id)->get()->sortByDesc('created_at')->take(10);
    }
}

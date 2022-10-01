<?php

namespace App\GraphQL\Mutations;

use App\Models\PostLike;
use Illuminate\Support\Facades\Auth;

final class Unlike
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

        $postLike = PostLike::where([
            'user_id' => $user->id,
            'post_id' => $args['post_id']
        ])->first();

        if ($postLike) {
            $postLike->delete();
            return 'deleted';
        }

        return 'not deleted';
    }
}

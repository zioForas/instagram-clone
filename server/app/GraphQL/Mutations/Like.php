<?php

namespace App\GraphQL\Mutations;
use App\Models\PostLike;
use Illuminate\Support\Facades\Auth;

final class Like
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $user = Auth::user();

        if (!$user) {
            throw new \RuntimeException('Current user not found');
        }
        return PostLike::create([
            'post_id'=>$args['post_id'],
            'user_id' => $user-> id,
        ]);
    }
}

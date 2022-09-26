<?php

namespace App\GraphQL\Mutations;
use Illuminate\Support\Facades\Auth;
use App\Models\UserFollower;

final class Unfollow
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

        $userFollower = UserFollower::where([
            'follower_id' => $user->id,
            'user_id' => $args['user_id']
        ])->first();

        if ($userFollower) {
            $userFollower->delete();
            return 'deleted';
        }

        return 'not deleted';
    }
}

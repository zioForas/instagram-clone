<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\Auth;
use App\Models\Post;


final class AddPost
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
        
        $file = $args['file'];
        
        $upload = $file->storePublicly('public');
        
        return Post::create([
            'user_id' => $user->id,
            'caption' => $args['caption'],
            'image' => $upload
        ]);
    }
    
}           
//        Ɛ> I LOVE ANTONIO <3      Ɛ> I love diancinia <3
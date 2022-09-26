<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\models\User;
use App\Models\PostComment;
use App\Models\PostLike;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'caption',
        'image'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
    public function comment() {
        return $this->hasMany(PostComment::class);
    }
    public function Likes() {
        return $this->hasMany(PostLike::class);
    }
}

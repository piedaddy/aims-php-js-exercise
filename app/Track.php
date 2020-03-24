<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Track extends Model
{
    protected $casts = [
        'artists' => 'array'
    ];

    protected $fillable = [
        'title',
        'artists'
    ];

    public function publisher() {
        return $this->belongsTo(Publisher::class);
    }
}

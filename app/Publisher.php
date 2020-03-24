<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Publisher extends Model
{
    public function tracks() {
        return $this->hasMany(Track::class);
    }
}



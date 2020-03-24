<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Track;
use DB;

class TrackController extends Controller
{
    public function getTracks() {
        $tracks = Track::orderBy('title')->get();
        foreach($tracks as $track) {
            $track_id = $track->id;
            $artists = $this->getArtistsByTrackId($track_id);
            $track->artists = $artists;
        };
        return $tracks;
    }
    
    public function getArtistsByTrackId($track_id) {
        $artists = DB::table('tracks')->where('id', '=', $track_id)->pluck('artists');
        return $artists;
    }

    public function search(Request $request) {
        $song = $request->input('song');
        $track = Track::where('title', 'like', '%'.$song.'%')->get();
        return $track;
    }

    public function delete(Request $request, $id) {         
        Track::where('id', '=', $id)->delete();
        return response()->json(['okay' => true],200);
    }
    
}

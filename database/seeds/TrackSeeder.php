<?php

use Illuminate\Database\Seeder;

class TrackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('TRUNCATE TABLE `tracks`');

        $data = json_decode(file_get_contents(storage_path('data.json')), true);

        $dates = [];

        foreach($data as $track) {
          //  $dates = $track['release_date']->format('dd/mm/yyyy');

            DB::table('tracks')->insert([
                'title'=> $track['title'],
                'duration' => $track['duration'],
                'artists' => $track['artists'],
                ]);

                // foreach($dates as $date) {
                //     DB::table('tracks')->insert([
                //         'release_date' => $date,
                //     ]);         
                //};


        }; 


    }
}

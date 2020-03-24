<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Track;
use DB;
use DateTime;

class AddTrack extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:addTrack {publisher_title : publisher of track}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Add track to database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        DB::statement('TRUNCATE TABLE `tracks`');

        $publisher = $this->argument('publisher_title');
        $data = json_decode(file_get_contents(storage_path('data.json')), true);

        foreach($data as $track) {
            $stringDate = $track['release_date'];
            $newDate = date("Y-m-d", strtotime($stringDate));
            DB::table('tracks')->insert([
                'title'=> $track['title'],
                'duration' => $track['duration'],
                'valid' => $track['artists'] !== "",
                'artists' => $track['artists'],
                'release_date' => $newDate,
                'publisher_title' =>$publisher,
                ]);
        }
     }
}

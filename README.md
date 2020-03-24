AIMS PHP & JS Exercise
====================================
The following is instructions and explanations for this exercise! 

### Backend

#### Model
There are two migration files, one for the Publishers table and one for the Tracks table. `php artisan migration` will migrate these tables to the database `aims`.

#### Console command
To access the command, run `php artisan command:addTrack {nameOfPublisher}`. The Publisher database has a list of some recording companies (SubPop is one example).


### Frontend

I used `NPM` for the front-end.

The rendered page is getting data from the TrackController `getTracks` method. Each track has a button 'More details' that will show only that specific track and more information about the track. There is pagination at the bottom with the two buttons, and a button on the top of the page 'back to track list' that will always take you back to the main list of tracks. 

You may search for tracks in the search bar above the track list. Each track always has the 'delete' option at the bottom, which is coming from the TrackController `delete` method. 

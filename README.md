AIMS PHP & JS Exercise
====================================

Please, create the following:

### Backend API

#### Non-functional requirements

* Use Laravel or Symfony.
* Use PHP 7.1 or higher.
* You can use any publicly available vendor packages as long as they can be installed through composer.
* Use a relational database to store the model data (preferably MySQL or PgSQL).

#### Model
Create a model that can hold the following data:

##### Track

* title (string, required)
* duration (integer)
* artists (array of strings)
* release date (DateTime)
* valid (boolean)

##### Publisher

* title (string, required)
* country *(pick suitable data type)*

Implement a 1:N relationship between Publisher and Track. There will be a `tracks` attribute available for Publisher and a `publisher` attribute available for Track.

Implement a validation constraint that sets the attribute `valid`  to true if all other attributes are filled (i.e. duration, artists, and release date are not null).

#### Console command

Create a console command for importing Tracks into the database. The command takes two arguments:
* `publisher` (can be Publisher's title, id or CLI selection helper - *pick one*; only existing Publisher can be specified),
* `file` (path to the local file to import).

For the structure of the file see `backend/tests/samples/metadata.csv`.

The command imports the Tracks from the file to the database with the respective publisher relationship.

Create some Publishers to test the command (either manually, through migration, or data fixtures).

#### API endpoints

Create two endpoints for the following operations. Decide the naming and structure of request/response yourself concerning the Frontend App.

* List Tracks (includes all attributes, including related Publisher's title).
* Delete single Track.

### Frontend app

#### Non-functional requirements
* Use React.js (you can use any existing boilerplate (e.g. create-react-app) or framework (e.g. Next.js)).
* You can use some state management tool (e.g. Redux), but this is not required.
* You can use any publicly available vendor packages as long as they can be installed through NPM (or Yarn).
* Don't care much about the visual of the app. It will not be taken into account when evaluating the solution.
* Don't care about authentication.

#### Screens/Pages

Implement the following screens/pages of the application:

##### List of Tracks
* shows all tracks (all attributes) with pagination *(can be both paged or virtual)*,
* allows filtering Tracks by name,
* shows action (e.g. button) to display the Detail of a Track (see below),
* shows action (e.g. button) to delete a Track,
* *again, you can use any vendor package to make this done.*

##### Detail of a Track

* shows all attributes of a specified track,
* shows action (e.g. button) to delete the Track.

### Documentation

Please document how to run both parts of the exercise in a README file. Nothing fancy is required; a simple list of commands necessary to run the app will do.

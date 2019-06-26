# liri-node-app
    In this assignment, i made a LIRI app . LIRI is like iPhone's SIRI. However, 
    while SIRI is a SpeechInterpretation and Recognition Interface, LIRI
    is a _Language_ Interpretation and Recognition Interface. LIRI will be a 
    command line node app that takes in parameters and gives you back data.
    LIRI will search Spotify for songs, Bands in Town for concerts,
    and OMDB for movies.                                                                                                                                                                                                                                                          
Expected Outcomes
-------------------------
The LIRI Bot was designed to produce search results based on the following commands:

    1. node liri.js
     ? Who are u ? jyoti
     ? Want to proceed Yes
    ? Welcome  jyoti here are the options!! (Use arrow keys)
        > Need Info on Movies
          Need Info on Concert
          Spotify the Song
           Do what u Says

--------------------------------------------------------------------
  Each command produced different search results as listed below:
  1. Need Info on Concert 

    Name of venue
    Venue location
    Date of the event in MM/DD/YYYY format

--------------------------------------------------------------------------------
2 spotify-the song  

    Artist
    Song
    Spotify song preview url
    Albumn

----------------------------------------------------------------------------------
3.Need Info on Movies

    Title of the movie
    Year the movie came out
    IMDB Rating of the movie
    Country where the movie was produced
    Language of the movie
    Plot of the movie
    Actors in the movie
    Rotten Tomatoes Rating of the movie

--------------------------------------------------------------------------------

4. do-what-it-says

    Print the the results that are stored in the random.txt file
    like    
         spotify-this-song
         Need-Info-on-Movies
         Need-Info-on-Concert
    
#These are the packags included in the app.
    
    [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
     * [Axios]    (https://www.npmjs.com/package/axios)
    * [Moment]   (https://www.npmjs.com/package/moment)
    * [DotEnv]   (https://www.npmjs.com/package/dotenv)
     *[Chalk]     (https://www.npmjs.com/package/chalk)
   
Code by Command
------------------------------

Step-by Step screenshots
------------------------------
main screen
-----------------------------------------------

![screenshot1](https://user-images.githubusercontent.com/48188772/60153254-53a37800-97a9-11e9-90bc-6dd22f24f254.png)

Movie-info
----------------------------------------
![screenshot2](https://user-images.githubusercontent.com/48188772/60153316-7cc40880-97a9-11e9-8919-4c5b0f694ebb.png)

Band-info
--------------------------------------------

![sc3](https://user-images.githubusercontent.com/48188772/60153359-a41ad580-97a9-11e9-856b-426edf35cde2.png)

spotify-this-song
--------------------

![ss4](https://user-images.githubusercontent.com/48188772/60153386-b432b500-97a9-11e9-85e4-9b8a9e0da653.png)

do-what-it-says
---------------------
![ss5](https://user-images.githubusercontent.com/48188772/60153400-bd238680-97a9-11e9-8183-aa7b730304d3.png)
![readscreen2](https://user-images.githubusercontent.com/48188772/60153736-cd883100-97aa-11e9-8b30-0bc1de198554.png)





    
    
    
    

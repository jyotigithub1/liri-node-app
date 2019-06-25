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

    1. node liri.js concert-this
    2. node liri.js spotify-this-song
    3. node liri.js movie-this
    4. node liri.js do-what-it-says

--------------------------------------------------------------------
  Each command produced different search results as listed below:
  1. node liri.js concert-this “artist/band name” 

    Name of venue
    Venue location
    Date of the event in MM/DD/YYYY format

--------------------------------------------------------------------------------
2.node liri.js spotify-this-song “song/track name” 

    Artist
    Song
    Spotify song preview url
    Albumn

----------------------------------------------------------------------------------
3.node liri.js movie-this “movie title”

    Title of the movie
    Year the movie came out
    IMDB Rating of the movie
    Country where the movie was produced
    Language of the movie
    Plot of the movie
    Actors in the movie
    Rotten Tomatoes Rating of the movie

--------------------------------------------------------------------------------

4.node liri.js do-what-it-says

    Print the spotify results for “I want it that way” stored in the random.txt file
    
These are the packags included in the app.
    
    [Node-Spotify-API](hihttps://www.npmjs.com/package/node-spotify-api)
   * [Axios](https://www.npmjs.com/package/axios)
   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)
   *[Chalk](https://www.npmjs.com/package/chalk)
   
   
    
    
    
    
    

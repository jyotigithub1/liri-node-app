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
Need-info-on-Concert
------------------------
    This command used the Bands in Town Artist Events API. An axios.get sent the search request and 
    the results were console.logged using moment to change the format of the returned date.
    function bandinfo() {
    inquier.prompt([
        {
            type: "input",
            name: "bandInfo",
            message: "Enter the BandName or The Artist to Search"
        }
    ]).then(function (bandresponse) {
        var queryUrl = "https://rest.bandsintown.com/artists/" + bandresponse.bandInfo + "/events?app_id=codingbootcamp";
        // https://rest.bandsintown.com/artists/Morrissey/events?app_id=codingbootcamp
        axios.get(queryUrl).then(
            function (response) {
                if (!response) {
                    log(chalk.yellow("--------------------------------------------------------------"));
                    log(chalk.magenta("NO DATA FOUND..!!"));
                    log(chalk.yellow("--------------------------------------------------------------"));
                }
                else {
                    log(chalk.magenta("Here is the band info for" + " " + bandresponse.bandInfo));
                    banddisplay(response);
                }
               }
        );
    });
}
function banddisplay(response) {
    var dateandtime = moment(response.data[0].datetime, "YYYY-MM-DD'T'HH:mm:ss").format("ddd, MMMM Do,HH:mm");
    log(chalk.red("--------------------------------------------------------------"));
    log(chalk.blue("Venue Name : " + chalk.white(JSON.stringify(response.data[0].venue.name))));
    log(chalk.blue("Venue Location: " + chalk.white(JSON.stringify(response.data[0].venue.city + "," + " " + response.data[0].venue.region + "," + " " + response.data[0].venue.country))));
    log(chalk.blue("Venue Date and Time: " + chalk.white(JSON.stringify(dateandtime))));
    log(chalk.red("--------------------------------------------------------------"));
}

spotify-this-song
--------------------
This command used the Spotify request API. A node-spotify-api spotify.request sent the search request and the results were console.logged.
function songInfo() {
    inquier.prompt([
        {
            type: "input",
            name: "songInfo",
            message: "Enter the Song to be  Search"
        }
    ]).then(function (songresponse) {

        if (songresponse.songInfo === null || songresponse.songInfo === undefined || songresponse.songInfo.trim() === "") {

            songresponse.songInfo = "The Sign";
            log("Song:::::" + songresponse.songInfo);
        }
        spotify.search({ type: 'track', query: songresponse.songInfo, limit: 10 }, function (err, data) {

            // log(JSON.stringify(data, null, 2));
            if (err) {
                return log('Error occurred: ' + err);
            }
            log(chalk.magenta("Here is the SongInfo info for the Song " + " " + chalk.red(songresponse.songInfo)));
            songdisplay(data);
        });
    });
}
function songdisplay(data) {

    log(chalk.red("--------------------------------------------------------------"));
    log(chalk.blue("Artist: " + chalk.white(data.tracks.items[0].artists[0].name)));
    log(chalk.blue("Song: " + chalk.white(data.tracks.items[0].album.name)));
    log(chalk.blue("Want to Listen the song click here : " + chalk.white(data.tracks.items[0].album.external_urls.spotify)));
    log(chalk.blue("Album Name: " + chalk.white(data.tracks.items[0].album.artists[0].name)));
    log(chalk.red("--------------------------------------------------------------"));
}

movie-this
------------------------
This command used the omdb API. An axios.get sent the search request and the results were console.logged.
function movieInfo() {
    inquier.prompt([
        {
            type: "input",
            name: "movieInfo",
            message: "Enter the Movie to  be Search",
        }
    ]).then(function (movieresponse) {
        var queryUrl = "http://www.omdbapi.com/?t=" + movieresponse.movieInfo + "&y=&plot=short&apikey=trilogy";
        debugger;

        axios.get(queryUrl).then(
            function (response) {
                if (!response) {
                    log(chalk.yellow("--------------------------------------------------------------"));
                    log(chalk.magenta("NO DATA FOUND..!!"));
                    log(chalk.yellow("--------------------------------------------------------------"));
                }
                else {
                    log(chalk.magenta("Here is the Movie  info for" + " " + movieresponse.movieInfo));
                    moviedisplay(response);
               }
            }
        );
    });
}
function moviedisplay(response) {
    log(chalk.red("--------------------------------------------------------------"));
    log(chalk.blue("Title of the Movie" + " " + chalk.white((response.data.Title))));
    log(chalk.blue("Year of the Movie:" + " " + chalk.white((response.data.Year))));
    log(chalk.blue("Rated:" + " " + chalk.white((response.data.imdbRating))));
    log(chalk.blue("Rotten Tomatoes Rating of the movie: " + chalk.white((response.data.Ratings[1].Value))));
    log(chalk.blue("Country where the movie was produced: " + chalk.white((response.data.Country))));
    log(chalk.blue("Language of the movie: " + chalk.white((response.data.Language))));
    log(chalk.blue("Plot of the movie: " + "\n" + chalk.white((response.data.Plot))));
    log(chalk.blue("Actors in the movie: " + chalk.white((response.data.Actors))));
    log(chalk.red("--------------------------------------------------------------"));
}
do-what-it-says
---------------------------
This command pulled the spotify-this-song information from the local random.txt file.
function dowhatInfo() {

    fs.readFile("random.txt", "utf8", function (err, data) {

        // If an error was experienced we will log it.
        if (err) {
            console.log(err);
        }

        // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
            var output = data.split(",");
            var userinput = output[0];
            var name = output[1];
            var equalstring = "spotify-this-song";
            console.log(userinput);
            if (output[0] === equalstring) {
                spotify.search({ type: 'track', query: name, limit: 10 }, function (err, data) {

                    // log(JSON.stringify(data, null, 2));
                    if (err) {
                        return log('Error occurred: ' + err);
                    }
                    songdisplay(data);
                });
            }
            equalstring="Need-Info-on-Movies";
             if (output[2] === equalstring) {
                name = output[3];
                console.log(output[2]);
                console.log(output[3]);
                var queryUrl = "https://www.omdbapi.com/?t=" + name + "&y=&plot=short&apikey=trilogy";
                 axios.get(queryUrl).then(
                    function (response) {
                        if (!response) {
                            log(chalk.yellow("--------------------------------------------------------------"));
                            log(chalk.magenta("NO DATA FOUND..!!"));
                            log(chalk.yellow("--------------------------------------------------------------"));
                        }
                        else {
                            moviedisplay(response);
                        }

                    });
            }
                equalstring="Need-Info-on-Concert";
             if (output[4]===equalstring) {
                name = output[5];
                console.log(output[4]);
                var queryUrl = "https://rest.bandsintown.com/artists/" + name + "/events?app_id=codingbootcamp";
                // https://rest.bandsintown.com/artists/Morrissey/events?app_id=codingbootcamp
                axios.get(queryUrl).then(
                    function (response) {
                        if (!response) {
                            log(chalk.yellow("--------------------------------------------------------------"));
                            log(chalk.magenta("NO DATA FOUND..!!"));
                            log(chalk.yellow("--------------------------------------------------------------"));
                        }
                        else {
                            banddisplay(response);
                        }
                    });
            }

            else {
                console.log("No Data Available");
            }
        }
    });
}
    
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







    
    
    
    

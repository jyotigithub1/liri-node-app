require("dotenv").config();
require("dotenv").config();
const log = console.log;
var fs = require("fs");
// including moment
var moment = require("moment");
// including axios
var axios = require("axios");
// including keys
var keys = require("./keys.js");
// including inquier
var inquier = require('inquirer');
// including spotify
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
// log(spotify);
// including chalk
const chalk = require("chalk");
// log("omdb:::"+JSON.stringify(Omdb));
inquier.prompt([
    {
        type: "input",
        name: "username",
        message: "Who are u ?",
    },
    {
        type: "confirm",
        message: "Want to proceed",
        name: "confirm",
        default: true
    },

]).then(function (inresponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inresponse.confirm) {
        inquier.prompt([
            {
                type: "list",
                name: "options",
                message: "Welcome" + "  " + inresponse.username + " " + "here are the options!!",
                choices: ["Need Info on Movies", "Need Info on Concert", "Spotify the Song", "Do what u Says"]

            }
        ]).then(function (innerresponse) {
            switch (innerresponse.options) {
                case "Need Info on Concert":
                    bandinfo();
                    break;
                case "Spotify the Song":
                    songInfo();
                    break;
                case "Need Info on Movies":
                    movieInfo();
                    break;
                case "Do what u Says":
                    dowhatInfo();
                    break;
            }

        })
    }
    else {
        log("\nThat's okay " + inresponse.username + ", come again when you are more sure.\n");
    }
});
// Function for getting band info
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

// function for Song Info
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
// function for movie info
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





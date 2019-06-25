require("dotenv").config();
require("dotenv").config();
const log=console.log;
var fs = require("fs");
// including moment
var moment = require("moment");
// including axios
var axios = require("axios");
// including keys
var keys = require("./keys.js");
// including inquier
var inquier=require('inquirer');
// including spotify
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
// log(spotify);
// including omdb 
var Omdb = require('omdb');
// including chalk
const chalk=require("chalk");
// log("omdb:::"+JSON.stringify(Omdb));
inquier.prompt([
        {
            type:"input",
            name:"username",
            message:"Who are u ?",
         },
         {
            type: "confirm",
            message: "Want to proceed",
            name: "confirm",
            default: true
          },
    
]).then(function(inresponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inresponse.confirm) {
        inquier.prompt([
        {
            type:"list",
            name:"options",
            message:"Welcome"+"  "+inresponse.username +" "+"here are the options!!",
            choices:["Need Info on Movies","Need Info on Concert","Spotify the Song","Do whatever u want"]
       
         }
        ]).then(function(innerresponse) {
            switch(innerresponse.options){
             case "Need Info on Concert" :
                    bandinfo();
                     break; 
             case "Spotify the Song":
                    songInfo();
                     break;
             case "Need Info on Movies" :
                     movieInfo(inputChoice);
                     break;
             case "Do whatever u want":
                    doWhatInfo();
                     break;
         }
        
    })
    }
    else {
        log("\nThat's okay " + inresponse.username + ", come again when you are more sure.\n");
      }
    });
// Function for getting band info
    function bandinfo(){
        inquier.prompt([
            {
                type:"input",
                name:"bandInfo",
                message:"Enter the BandName or The Artist"
             }
            ]).then(function(bandresponse) {
               var queryUrl="https://rest.bandsintown.com/artists/" + bandresponse.bandInfo + "/events?app_id=codingbootcamp";
                // https://rest.bandsintown.com/artists/Morrissey/events?app_id=codingbootcamp
             axios.get(queryUrl).then(
                    function(response) {
                    if(!response){
                        log(chalk.yellow("--------------------------------------------------------------"));
                        log(chalk.magenta("NO DATA FOUND..!!"));
                        log(chalk.yellow("--------------------------------------------------------------"));
                }
                else{
                   
                   for(var i=0;i<response.data.length;i++){
                    var dateandtime=moment(response.data[i].datetime,"YYYY-MM-DD'T'HH:mm:ss").format("ddd, MMMM Do,HH:mm");
                    log(chalk.red("--------------------------------------------------------------"));
                    log(chalk.blue("Venue Name : " +chalk.white(JSON.stringify(response.data[i].venue.name))));
                    log(chalk.blue("Venue Location: " +chalk.white(JSON.stringify(response.data[i].venue.city+","+" "+response.data[i].venue.region+","+" "+response.data[i].venue.country))));
                    log(chalk.blue("Venue Date and Time: " +chalk.white(JSON.stringify(dateandtime))));
                    log(chalk.red("--------------------------------------------------------------"));
                   }
                }

            }
                  );
            
            
            });
    
    }
// function for Song Info
    function songInfo(){
        
    }
// function for movie info
    // function movieInfo(movieName){
    //      // Then run a request with axios to the OMDB API with the movie specified
    //      var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    //      axios.get(queryUrl).then(
    //         function(response) {
    //           //   log.log(response);
    //           log.log("The movie's rating is: " + response.data.Year);
    //         })
    //         .catch(function(error) {
    //           if (error.response) {
    //               log.log("---------------Data---------------");
    //             log.log(error.response.data);
    //             log.log("---------------Status---------------");
    //             log.log(error.response.status);
    //             log.log("---------------Status---------------");
    //             log.log(error.response.headers);
    //           } else if (error.request) {
    //               log.log(error.request);
    //           } else {
    //             // Something happened in setting up the request that triggered an Error
    //             log.log("Error", error.message);
    //           }
    //           log.log(error.config);
    //         });
    
    // }
    function dowhatInfo(){}
        
 





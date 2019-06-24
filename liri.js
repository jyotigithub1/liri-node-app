require("dotenv").config();
require("dotenv").config();
var fs = require("fs");
var moment = require("moment");
var axios = require("axios");
var keys = require("./keys.js");
// used this console.log for testing purpose
// console.log(keys);
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
const chalk=require("chalk");
const log=console.log;
// used this console.log for testing purpose
// console.log(spotify);
// Code  for getting user's input and process starts from here
var node=process.argv;
log(node);
var filePath=process.argv[1];
var inputTopic=process.argv[2];
log(chalk.black.underline.bold.bgMagenta("HERE ARE THE OPTIONS"));
switch(inputTopic){
    case "concert-this" :
        bandInfo();
        break;
    case "spotify-this-song":
        songInfo();
        break;
    case "movie-this" :
        movieInfo();
        break;
    case "do-what-it-says":
        doWhatInfo();
        break;
}
defalut:
console.log("please Enter this options");
function bandinfo(){

}
function bandiInfo(){
    
}

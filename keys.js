// console.log('this is loaded');
var Spotify = require('node-spotify-api');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

var Omdb=require('omdb');
exports.omdb={
  id:process.env.HOST,
  key:process.env.APIKEY
};
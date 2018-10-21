const keys = require("./keys.js");
const request = require("request");
var fs = require("fs");
require("dotenv").config();
var BandsInTownEvents = require( 'bandsintown-events');
var Events = new BandsInTownEvents();
const spotify = require("node-spotify-api");
var moment = require("moment");
var fs = require('fs')
var concertThis = ('concert-this');
var omdb = ('movie-this');
var spotifyThisSong = ('spotify-this-song');

var input = process.argv;
var action = process.argv;[2];
var inputs = process.argv[3];

for(i=4; i<process.argv.length; i++) {
  inputs += '+' + process.argv[i];
}

function theSwitch() {
  switch(action) {
    case 'concert-this':
    fetchConcerts(inputs);
    break;

    case 'spotify-this-song':
    spotifyMe(inputs);
    
    case 'movie-this':
    movieMe(inputs);
    break;
    case 'do-what-it-says':
    followText(inputs);
    break;
    }
  };

  function fetchConcerts(inputs) {
    console.log("Movies on the way!");
    var client = new omdb
    
    (OMDB_ID=http://www.omdbapi.com/?i=tt3896198&apikey=47dc3aed);
  
// }
// if (selection == "concert-this") {
//   concertThis(argumentOne);
// }
// else if (selection == "spotify-this-song") {
//   mySpotify(argumentTwo);
// }
// else if (selection == "movie-this") {
//   omdb(argumentThree);
// }
// else if (selection == "do-what-it-says") {
//   doWhatItSays();
// }
// var getMyMovies = function() {
//   var client = new Omdb(api.keys.omdbKeys);
  

// }
var getSpotify = function(songName) {
  if (songName === undefined) {
    songName = "'The Sign' by Ace of Base"
 
}
spotify.search({type: 'track', query: songName }, function(err, data) {
  if (err) {
    console.log('Error occurred: ' + err);
  }
  var songs = data.tracks.items;
  for(var i =0; i < songs.length; i++) {
    console.log(i);
    console.log('artist(s): ' + songs[i].artist.map(getArtistnames));
    console.log('song name: ' + songs[i].name);
    console.log('preview song: ' + songs[i].preview_url);
    console.log('album: ' + songs[i].album.name);
  }
});

Events.setParamus({
  "app_id": "myappname",
  "artists": [
    "Roots",
    "You Got Me"
  ]
});
Events.getEvents(function( events ) {
  for(var i = 0; i < events.length; i++) {
    console.log( events[i].venue.city + "," + events[i].venue.region );
  }
},function( errors ) {
  console.log(errors);
});
}
fs.readFile("i_want_it_that_way.txt", "utf8",function(err, data) {
  if (err) {
    return console.log(err);
  }
  var output = data.split(",");

  for (var i = 0; i < output.length; i++) {
    console.log(out[i]);
  }
})


var questions = [{
  
    type: "concert-this",
    name: "Name of the venue",
    message: "Venue location",
    date: "MM/DD/YYYY"

  },
  inquirer.prompt(questions).then(answers => {
    console.log(` ${answers['']}!`)
  }),
  {
  type: "spotify-this-song",
  name: "Artist(s)",
  message: "The song's name",
  link: "A preview link of the song from Spotify",
  album: "The album that the song is from"
  },
]
inquirer.prompt(questions).then(answers => {
  console.log(`${answers['']}!`)
})
request
.prompt([
  {
    type: "movie-this",
    name: "Title of the movie",
    year: "Year the movie came out",
    rating: "IMDB Rating of the movie",
    country: "Country where the movie          was produced",
    language: "Language of the movie",
    plot: "Plot of the movie",
    Actors: "Actors in the movie"
  },
])
.then(function(userResponse) {
  if (userResponse.confirm) {
    console.log("So you like" + userResponse.movie);
  }
  else {
    console.log("\nIf you haven't watched 'Mr. Nobody,' then you should: http//www.imbd.com/titlett0485947/" + "It's on Netflix!");
  }})}

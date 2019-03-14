//some setup tings
require('dotenv').config();
var Snooper = require('reddit-snooper');
var geniusAPI = require('genius-api');
var genius  = new geniusAPI(process.env.Genius_Token);
const lodash = require('lodash');
const fs  = require('fs');
console.log("Starting JosBot");


var GeniusBot; 
GeniusBot = createSnooper(GeniusBot);
//hold a given post within a post variable

function createSnooper(snooper){
	snooper = new Snooper(
		{
			//credentials 
			username: process.env.username, 
			password: process.env.password, 
			app_id: process.env.app_id,
			api_secret: process.env.api_secret, 
			user_agent: process.env.user_agent,
			automatic_retries:true, 
			api_request_per_minuite: 30
		})
	return snooper; 
}

//generates the genius link 
function pullURL(searchTerm,songPost,newline){
	var link; 
	console.log("Running Genius Search")
	genius.search(searchTerm).then(function(response){
		if (response.hits != undefined){
			console.log("A Response was Generated")
			link = lodash.cloneDeep(response.hits[0].result.url);
			newline= newline + " The lyrics to this song are at: " + link + "\n" ;
			fsAppend(newline)
			console.log("The Lyrics to this song are at: " + link);
			//postComment(link, songPost);
		}
		else{
			console.log("Response was Undefined");
		}
	}); 
}

//adds the data to the text file 
function fsAppend(text) {     
	fs.appendFile('submissions.txt', text, function (err) {
	  if (err) throw err;
	  console.log('Saved the latest Submission!');
	});
 } 


function main(snooper){
	var songPost; 
	var songName; 
	var artistName; 
	var url; 
	var songInfo; 
	var postTitle;
	var newline; 
	//has to watch all of the subreddit, holds the commenting functions within 
	snooper.watcher.getPostWatcher("testingground4bots")
		.on('post', function(post){
			//post is an object containing all post data 
			console.log('A post was generated! The Post was posted by: ' + post.data.author);
			songPost = lodash.cloneDeep(post); 
			postTitle = songPost.data.title; 
			// console.log(songPost);
			console.log("Post Title:" + postTitle); 

			//cleans up the post title to create a valid string for searching 
			if (postTitle.includes("-")){
				var dash = postTitle.indexOf("-")
				//get artistName, check if it includes either bracket
				if (postTitle.includes("]")){
					//don't include the bracket
					var closedBra = postTitle.indexOf("]") + 1;
					artistName = postTitle.substring(closedBra, dash)
				}
			//if it doesn't include the bracket
				else{
					artistName = postTitle.substring(0, dash);
				}
			}


		songName = postTitle.substring(dash+1);
		// console.log("Song Name: " + songName);
		// console.log("Artist Name: " + artistName);
		songInfo = artistName + " " + songName; 
		console.log("Song Info: " + songInfo);
		newline = "Artist Name:  " + artistName + " Song Name: " + songName;
		pullURL(songInfo,songPost, newline);
	})
	.on('error', console.error);
}

//should post a comment to the post passed
function postComment(link, songPost){
	console.log("Post Comment Running")
	link = "Check out Lyrics to this song at: " + link;
	console.log(songPost)
	GeniusBot.api.post("/api/comment", {
		api_type: "json", 
		text: link, 
		thing_id: songPost.data.name
	}, function(err, statusCode, data){
		if(!err) console.log('Just replied to the post: ' + songPost.data.name);
		console.log(data); 
	});
}


main(GeniusBot); 
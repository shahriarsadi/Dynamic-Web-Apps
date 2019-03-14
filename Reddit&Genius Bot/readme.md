# Reddit and Genius Bot - JosBot

## About
JosBot is a bot that reads through the submissions of the reddit Hip-Hop community, r/HipHopHeads, pulls song 
submission posts under the format songArtist-songName, cleans the data from the posts and runs a search through
the Genius API to generate a link to the lyrics of the given song posted and logs all that data onto a text file. 
This bot was created using Node.js. 

## How to Use

This bot requires the following libraries, all can be installed via npm: 
1. [reddit-snooper](https://www.npmjs.com/package/reddit-snooper#reddit-watcher-snooperwatcher)
2. [Genius API](https://www.npmjs.com/package/genius-api)
3. [Env](https://www.npmjs.com/package/env)
4. [lodash](https://www.npmjs.com/package/lodash) 

The file 'submissions.txt' holds all the logged data, the code does not generate a file so if you'd like to change the 
filename change both within your root folder and app.js. To use this pot you must sign-up for both the reddit API and the 
Genius API and retrieve the authentication credentials. 

## Known Bugs

This bot also has a built in function to comment the link of a song to a song submission Post, however, 
likely due to an OAUTH error, this code crashes the bot as reddit returns an 403 forbidden error.  

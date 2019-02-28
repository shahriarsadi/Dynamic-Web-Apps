console.log('The Bot is Starting');

const Twit = require('twit'); 

const config = require('./config'); 
var T = new Twit(config); 
setInterval(retweet, 1000*20);

function retweet(){
	var tweets = [];
	T.get('search/tweets', { q: 'Cohen since:2019-01-25', count:10},
		function(err, data, response){
			for (var i=0; i<(data.statuses).length; i++){
				tweets.push(data.statuses[i].text);
				var randomInd=Math.floor(Math.random()*tweets.length);
				T.post('statuses/update', {status: tweets[randomInd] }, function(err, data, response){
					console.log(`posted ${tweets[randomInd]}`);
				})
			}
		})
}

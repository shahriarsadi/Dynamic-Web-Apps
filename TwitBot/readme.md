# Jo's Twit Bot 
For this project I set about learning how to use Twitter's API using Node JS, NPM and Twit. 
I then used the basic methods available via Twit, in this case the **Get** and **Post** methods, to access tweets based on a set time 
and keywords within that tweet. 
### What it Does
Thus far, my bot pulls in 10 tweets that has the keyword 'Cohen' within them, from Jan 25th 2019 to present
day. It then adds the text from those tweets to an array and posts them randomly and intermently to twitter, essentially emulating 
the retweet function. 
### PreInstallation
Create a Twitter Developer account for access to API Keys and Authentication Tokens. 
### Install Instructions 
1. [Install Node JS](https://nodejs.org/en/), This will also install NPM. 
2. Within the terminal or Command Prompt Using Node, naviagate to the where you'd like to [install Twit](https://www.npmjs.com/package/twit)
and type: npm install Twit 
3. Within the directory that you installed Twit, create a 'config.js' file, that contains the following: 
```javascript
var Twit = require('twit') 
var T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
```
4. Proceed to run apps.js through your node terminal and editing the script to your liking! 

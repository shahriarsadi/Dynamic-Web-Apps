
var express = require('express');
var app =  express(); 
var fs = require('fs');
port = 3000;
var data = fs.readFileSync('words.json');
var words = JSON.parse(data); 
console.log("The server is starting");

console.log(words);
var server = app.listen(port, listening);

function listening(){
	console.log("listening...");
}
var list = []; 
function popList(anyList){
	for (var i=0; i < 100; i++){
		anyList[i] = "Hello: " + String(i); 
	}
	return anyList; 
}
popList(list); 
// var write  = JSON.stringify(words,null,2);

fs.writeFile('words.json', list, finished); 
function finished(err) {
	console.log("all set");
}

var data = fs.readFileSync('words.json');
var words = JSON.parse(data); 

app.get('/', function (req, res){
	res.send(words);
})


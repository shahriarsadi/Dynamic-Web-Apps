const express = require('express');
const app = express();
const http = require('http').Server(app);
var fs = require('fs');
const io = require('socket.io')(http);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/chat.html');
})

io.on('connection', (socket) => {
    //add send pic functionality

    console.log("User connected");
    socket.broadcast.emit('chat message', "New user joined.");
    socket.on('disconnect', () => {
        console.log("user disconnected");
        socket.broadcast.emit('chat message', 'A user left.');

    });




// figure out how to set stance of are you a tutor or student
    socket.on('chat message', (msg, name, stance) => {
        io.emit('chat message', `${stance}: ${name}: ${msg}`);
    })
});

function onConnection(socket){
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
}
io.on('connection', onConnection);

http.listen(3000, () => {
    console.log("App running on 3000");
});



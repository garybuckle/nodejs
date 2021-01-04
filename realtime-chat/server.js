const fs = require('fs');
const http = require('http');
const SocketIO = require('socket.io');

// Prepares HTML file to be served
const content = fs.readFileSync(__dirname + '/index.html', 'utf8');
const httpServer = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(content));
  res.end(content);
})

// Creates socket.io connection
const io = SocketIO(httpServer);

// Handles "connect" event
io.on('connect', socket => {
    // Handles "message" event sent by client
  socket.on('message', data => {
        // Emits new message to every connected client
        io.emit('newMessage', {
            message: data
        })
    })
});

// Starts up server
httpServer.listen(3000, () => {
  console.log("🔥 Listening on http://localhost:3000");
})

This enough for the basic functionali
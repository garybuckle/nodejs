const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.port || 3000;
const io = require('socket.io')(server);
const path = require('path');
app.use(express.static(path.join(__dirname + '/public')))

io.on('connection', socket => {
    console.log("client connected...");
});

// test server
app.get('/', (req,res) => {
    res.status(200).send("Running...");
});

server.listen(port, () => {
    console.log(`Server is up and running on ${port}`);
});
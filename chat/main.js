var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const { disconnect } = require("process");
const {joinUser, removeUser} = require('./users');

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html");
});
// set up chat room
http.listen(3000);


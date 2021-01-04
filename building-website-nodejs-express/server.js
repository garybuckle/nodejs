const express = require("express");

const path = require("path");

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, "./static")));

// Route for default page
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, " ./static/index.html"));
});

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, " ./static/speakers.html"));
});

// Start the server and tell it where to listen
app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});

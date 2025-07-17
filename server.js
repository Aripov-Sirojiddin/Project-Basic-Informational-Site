const express = require("express");
const fs = require("fs");
const server = express();

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});
server.get("/about", (req, res) => {
  res.sendFile(__dirname + "/pages/about.html");
});
server.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/pages/contact-me.html");
});

server.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/pages/404.html")
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Started listening on port ${PORT}\nhttp://localhost:${PORT}`);
});

const http = require("http");
const fs = require("fs");

const port = 8000;

const server = http.createServer((req, res) => {
  let page = req.url;
  if (page === "/index" || page === "/404") {
    page = "";
  } else if (page === "/") {
    page = "/index";
  }

  fs.readFile(`./pages${page}.html`, (err, data) => {
    if (err) {
      res.writeHead(404);
      fs.readFile("./pages/404.html", (err, data) => res.write(data));
    } else {
      res.write(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

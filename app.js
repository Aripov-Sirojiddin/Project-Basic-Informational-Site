const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");
const expressLayouts = require("express-ejs-layouts")

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(expressLayouts);
app.set('layout', 'layout');

app.locals.links = [
  { href: "/", text: "Home" },
  { href: "/author", text: "Author" },
  { href: "/author/1", text: "Author 1" },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/author{s}", authorRouter);
app.use("/book{s}", bookRouter);
app.use("/", indexRouter);

app.get("/*splat", (req, res) => {
  res.status(404).sendFile(__dirname + "/pages/404.html");
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.statusCode || 500).send(error.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Started listening on port ${PORT}\nhttp://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/author{s}", authorRouter);
app.use("/book{s}", bookRouter);
app.use("/", indexRouter);

app.get("/*splat", (req, res) => {
  res.status(404).sendFile(__dirname + "/pages/404.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Started listening on port ${PORT}\nhttp://localhost:${PORT}`);
});

const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Home page"));
indexRouter.get("/:username", (req, res) => {
  const { username } = req.params;
  res.send(`Looking for user: ${username}`);
});

module.exports = indexRouter;

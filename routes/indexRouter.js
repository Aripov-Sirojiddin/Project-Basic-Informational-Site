const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.getAllUsers);
indexRouter.get("/:username", (req, res) => {
  const { username } = req.params;
  res.send(`Looking for user: ${username}`);
});

module.exports = indexRouter;

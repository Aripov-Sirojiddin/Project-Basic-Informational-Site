const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books"));

bookRouter.get("/:bookTitle", (req, res) => {
  const { bookTitle } = req.params;
  res.send(`Title: ${bookTitle}`);
});

module.exports = bookRouter;

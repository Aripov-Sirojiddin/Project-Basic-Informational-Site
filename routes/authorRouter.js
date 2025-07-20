const { Router } = require("express");
const { getAllAuthors, getAuthorById } = require("../controllers/authorController");
const authorRouter = Router();

authorRouter.get("/", getAllAuthors);
authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;

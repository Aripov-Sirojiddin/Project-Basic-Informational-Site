const db = require("../db");
const CustomNotFoundError = require("../errors/customNotFoundError");

async function getAllAuthors(req, res) {
  const authors = await db.getAllAuthors();
  res.render("./pages/about", {
    title: `All authors`,
    authors: authors,
  });
}

async function getAuthorById(req, res) {
  const { authorId } = req.params;
  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  res.render("./pages/about", {
    title: `${author.name}'s about page`,
    authors: [author],
  });
}

module.exports = { getAllAuthors, getAuthorById };

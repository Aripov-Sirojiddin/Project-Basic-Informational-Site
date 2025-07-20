const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];
async function getAllAuthors() {
  return authors;
}
async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

const users = ["Rose", "Cake", "Biff"];
async function getAllUsers() {
  return users;
}

module.exports = { getAllAuthors, getAuthorById, getAllUsers };

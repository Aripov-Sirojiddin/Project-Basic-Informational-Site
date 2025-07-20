const db = require("../db");
const CustomNotFoundError = require("../errors/customNotFoundError");

async function getAllUsers(req, res) {
  const users = await db.getAllUsers();

  if (!users) {
    throw new CustomNotFoundError("Couldn't retrive all users");
  }

  res.render("./pages/index", {
    title: "Home Page",
    links: req.app.locals.links,
    message: "EJS rocks!",
    users: users,
  });
}

module.exports = {
  getAllUsers,
};

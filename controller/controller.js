const pool = require("../db/pool");
async function getAllMessages(req, res) {
  const result = await pool.query("SELECT * FROM messages");

  const currentUser = "Creathorkim";

  res.render("index", {
    title: "Mini Messages Board",
    messages: result.rows,
    currentUser: currentUser,
  });
}

function newMessageForm(req, res) {
  res.render("form", {
    title: "Add new Message",
  });
}
async function insertMessage(req, res) {
  const { user, message } = req.body;
  try {
    await pool.query(`INSERT INTO messages ("user", message) VALUES ($1, $2)`, [
      user,
      message,
    ]);

    res.redirect("/");
  } catch (err) {
    console.log("Error :", err);
    res.render("Oops, something went wrong.")
  }
}

module.exports = { getAllMessages, insertMessage, newMessageForm };

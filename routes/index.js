const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hey, Just checking in on the project timeline. 👀",
    user: "Creathorkim",
    added: new Date(),
  },
  {
    text: "All good here! Just polishing the final touches on the UI.",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Looks amazing already. Let's push to GitHub tonight?",
    user: "Creathorkim",
    added: new Date(),
  },
  {
    text: "Definitely. I even added dotenv to hide the port like a pro 😂",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  const currentUser = "Creathorkim";
  res.render("index", { title: "Mini Meesageboard", messages, currentUser });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

router.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;

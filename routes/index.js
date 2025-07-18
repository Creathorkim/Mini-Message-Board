const express = require("express");
const controller = require("../controller/controller");
const router = express.Router();

router.get("/", controller.getAllMessages);
router.get("/new", controller.newMessageForm);
router.post("/new", controller.insertMessage);

module.exports = router;

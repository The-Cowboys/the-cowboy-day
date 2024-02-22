const express = require("express");
const router = express.Router();

const cowboysController = require("./cowboys.controller");

router.get("/", cowboysController.getAll);
router.get("/today", cowboysController.getToday);

module.exports = router;

// TODO: delete this file

const express = require("express");
const router = express.Router();

const cowboysController = require("./../cowboys/cowboys.controller");

router.get("/today", cowboysController.getToday);

module.exports = router;

const express = require("express");
const router = express.Router();

const cowboysRoute = require('./cowboys/cowboys.route');
const putosRoute = require('./putos/putos.route');

router.use('/cowboys', cowboysRoute);
router.use('/putos', putosRoute); // TODO: remove

module.exports = router;

const cowboyService = require('./cowboys.service');

console.log('Cowboy Controller');

async function getAll(_, res) {
  try {
    res.json(await cowboyService.getAll());
  } catch (err) {
    console.error(err);

    res.status(500).json({
      "message": "Error getting list of cowboys",
    });
  }
}

async function getToday(_, res) {
  try {
    res.json(await cowboyService.getToday());
  } catch (err) {
    console.error(err);

    res.status(500).json({
      "message": "Error genereting the cowboy for today",
    });
  }
}

module.exports = {
  getAll,
  getToday
};
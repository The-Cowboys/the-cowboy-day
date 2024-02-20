const cowboyService = require('./cowboys.service');

console.log('Cowboy Controller');

async function getAll(_, res, next) {
  try {
      res.json(await cowboyService.getAll());
  } catch (err) {
    console.error(`Error while getting list of cowboys`, err.message);
    next(err);
  }
}

async function getToday(_, res, next) {
  try {
    res.json(await cowboyService.getToday());
  } catch (err) {
    console.error(`Error while getting today's cowboy`, err.message);
    next(err);
  }
}

module.exports = {
  getAll,
  getToday
};
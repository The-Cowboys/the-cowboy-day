const tontoRepository = require('./tontos.repository');

async function saveTodays(cowboyId) {
  const date = new Date();
  const today = await tontoRepository.getTontoByDate(date);
  if (today) return today;

  await tontoRepository.saveTonto(date, cowboyId, new Date());

  return await tontoRepository.getTontoById(cowboyId)
}

async function getTontoByMes(year, month) {
  const startOfMonth = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0, 0));
  const endOfMonth = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));
  return await tontoRepository.getTontoByPeriod(startOfMonth, endOfMonth);
}

async function getToday() {
  const date = new Date();
  return await tontoRepository.getTontoByDate(date);
}

async function getTontoById(idCowboy) {
  return await tontoRepository.getTontoById(idCowboy);
}

async function getAll() {
  return await tontoRepository.getTontos();
}

module.exports = {
  getTontoByMes,
  getTontoById,
  saveTodays,
  getToday,
  getAll,
};

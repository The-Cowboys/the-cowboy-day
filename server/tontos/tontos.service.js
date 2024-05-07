const tontoRepository = require('./tontos.repository');

async function saveTodays(cowboyId) {
  const date = new Date();
  const today = await tontoRepository.getTontoByDate(date);
  if (today) return today;

  await tontoRepository.saveTonto(date, cowboyId, new Date());

  return await tontoRepository.getTontoById(cowboyId)
}

async function getTontosPorRango(inicio, fin) {
  const start = new Date(inicio);
  const end = new Date(fin);
  return await tontoRepository.getTontoByPeriod(start, end);
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
  getTontosPorRango,
  getTontoById,
  saveTodays,
  getToday,
  getAll,
};

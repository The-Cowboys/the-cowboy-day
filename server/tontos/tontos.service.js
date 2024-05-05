const dayjs = require('dayjs');

const tontoRepository = require('./tontos.repository');

function getTodayString() {
  const date = new Date();
  return getDateString(date);
}

function getDateString(date) {
  return dayjs(date).format('DD/MM/YYYY');
}

async function saveTodays(cowboyId) {
  const date = new Date();
  const strToday = getDateString(date);
  const today = await tontoRepository.getTontoByDate(strToday);
  if (today) return today;

  await tontoRepository.saveTonto(strToday, cowboyId, date);

  return await tontoRepository.getTontoById(cowboyId)
}

async function getTontoByMes(year, month) {
  const mes = `${month}/${year}`;
  return await tontoRepository.getTontoByMes(mes);
}

async function getToday() {
  const strToday = getTodayString();
  return await tontoRepository.getTontoByDate(strToday);
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

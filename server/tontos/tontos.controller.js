const tontosService = require("./tontos.service");

async function createTontoHoy(req, res) {
  try {
    const cowboyId = req.body.id;
    res.json(await tontosService.saveTodays(cowboyId));
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: `Error saving todays's tonto`,
    });
  }
}

async function getTontoPorId(req, res) {
  try {
    const idCowboy = req.params.idCowboy;

    const tonto = await tontosService.getTontoById(idCowboy);
    if (tonto) return res.json(tonto);

    res.status(404).json({
      message: `Tonto con id ${idCowboy} no existe`,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: `Error getting todays's tonto`,
    });
  }
}

async function getTontoHoy(_, res) {
  try {
    const tonto = await tontosService.getToday();
    if (tonto) return res.json(tonto);

    res.status(404).json({
      message: `Tonto del dia aún no calculado.`,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: `Error getting todays's tonto`,
    });
  }
}

async function getTontosMes(req, res) {
  console.log('getTontosMes', req.params);
  try {
    const year = req.params.year;
    const month = req.params.month;

    const tontos = await tontosService.getTontoByMes(year, month);
    return res.json(tontos);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: `Error getting todays's tonto`,
    });
  }
}

async function getAllTontos(_, res) {
  try {
    res.json(await tontosService.getAll());
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: `Error getting tontos`,
    });
  }
}

module.exports = {
  createTontoHoy,
  getTontoHoy,
  getAllTontos,
  getTontoPorId,
  getTontosMes,
};

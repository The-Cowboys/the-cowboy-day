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
      message: `Tonto aún no registrado.`,
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
      message: `Tonto aún no registrado.`,
    });
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
};

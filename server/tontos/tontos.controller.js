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

async function getTontosPorRango(req, res) {
  try {
    const inicio = req.query.inicio;
    const fin = req.query.fin;

    console.log("inicio", inicio, "fin", fin);

    if (!inicio) {
      return res.status(400).json({
        message: `Falta el parámetro de 'inicio' en la URL`,
      });
    }

    if (!fin) {
      return res.status(400).json({
        message: `Falta el parámetro de 'fin' en la URL`,
      });
    }

    const tontos = await tontosService.getTontosPorRango(inicio, fin);
    return res.json(tontos);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: `Error obteniendo los tontos del mes`,
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
  getTontosPorRango,
};

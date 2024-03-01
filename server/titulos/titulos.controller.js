const titulosService = require("./titulos.service");

async function getCowboyTitulos(req, res) {
  try {
    const cowboyId = req.params.idCowboy;
    res.json(await titulosService.getAllByCowboyId(cowboyId));
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: `Error getting titles for cowboy ${cowboyId}`,
    });
  }
}

async function createCowboyTitulo(req, res) {
  try {
    const cowboyId = req.params.idCowboy;

    const data = {
      name: req.body.titulo,
      created: new Date(),
    };

    res.json(await titulosService.saveTitulo(cowboyId, data));
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Error creating title",
    });
  }
}

async function getAllTitulos(_, res) {
  try {
    res.json(await titulosService.getAll());
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Error getting all titles",
    });
  }
}

async function deleteTitulo(req, res) {
  try {
    const id = req.params.idTitulo;
    await titulosService.deleteById(id);
    res.status(204).send();
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Error deleting titulo",
    });
  }
}

module.exports = {
  getCowboyTitulos,
  createCowboyTitulo,
  getAllTitulos,
  deleteTitulo,
};

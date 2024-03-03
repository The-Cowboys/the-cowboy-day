const { standardAuth, sudoAuth } = require("./auth/auth.middleware");
const express = require("express");
const router = express.Router();

const tontosController = require("./tontos/tontos.controller");
const titulosController = require("./titulos/titulos.controller");

const cowboysRoute = require('./cowboys/cowboys.route');
const putosRoute = require('./putos/putos.route');

router.use('/cowboys', cowboysRoute);
router.use('/putos', putosRoute); // TODO: remove


// == Titulos ==
// Obtener titulos de un cowboy por id
router.get("/cowboys/:idCowboy/titulos", titulosController.getCowboyTitulos);
// Crear titulo a un cowboy por id
router.post("/cowboys/:idCowboy/titulos", standardAuth, titulosController.createCowboyTitulo);
// Obtener todos los títulos
router.get("/titulos", titulosController.getAllTitulos);
// Borrar un titulo por id
router.delete("/titulos/:idTitulo", standardAuth, titulosController.deleteTitulo);

// == Tontos ==
// Guardar tonto del dia
router.post("/tontos", sudoAuth, tontosController.createTontoHoy);
// Obtener tonto del dia
router.get("/tontos/hoy", tontosController.getTontoHoy);
// Obtener todos los tontos
router.get("/tontos", tontosController.getAllTontos);

module.exports = router;

const { standardAuth, sudoAuth } = require("./auth/auth.middleware");
const express = require("express");
const router = express.Router();

const tontosController = require("./tontos/tontos.controller");
const titulosController = require("./titulos/titulos.controller");

const cowboysRoute = require("./cowboys/cowboys.route");
const putosRoute = require("./putos/putos.route");

router.use("/cowboys", cowboysRoute);
router.use("/putos", putosRoute); // TODO: remove

// == Titulos ==
// Solicitud `GET /cowboys/idCowboy/titulos` para obtener los títulos de un cowboy por id
router.get("/cowboys/:idCowboy/titulos", titulosController.getCowboyTitulos);
// Solicitud `POST /cowboys/idCowboy/titulos` para crear un titulo al un cowboy por id
router.post("/cowboys/:idCowboy/titulos", titulosController.createCowboyTitulo);

// Solicitud `GET /titulos para obtener` todos los títulos
router.get("/titulos", titulosController.getAllTitulos);
// Solicitud `DELETE /titulos/:idTitulo` para obtener todos los títulos
router.delete("/titulos/:idTitulo", titulosController.deleteTitulo);

// == Tontos ==
// Guardar tonto del dia
router.post("/tontos", sudoAuth, tontosController.createTontoHoy);
// Obtener tonto por id
router.get("/tontos/:idCowboy(\d+)", tontosController.getTontoPorId);
// Obtener tonto del dia
router.get("/tontos/hoy", tontosController.getTontoHoy);
// Obtener todos los tontos
router.get("/tontos", tontosController.getAllTontos);

module.exports = router;

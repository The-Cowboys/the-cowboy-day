const { standardAuth, sudoAuth } = require("./auth/auth.middleware");
const express = require("express");
const router = express.Router();

const tontosController = require("./tontos/tontos.controller");
const titulosController = require("./titulos/titulos.controller");
const cowboysController = require("./cowboys/cowboys.controller");

// == Titulos ==
// Solicitud `GET /cowboys/idCowboy/titulos` para obtener los títulos de un cowboy por id
router.get("/cowboys/:idCowboy/titulos", titulosController.getCowboyTitulos);
// Solicitud `POST /cowboys/idCowboy/titulos` para crear un titulo al un cowboy por id
router.post("/cowboys/:idCowboy/titulos", titulosController.createCowboyTitulo);
// Solicitud `DELETE /titulos/:idTitulo` para obtener todos los títulos
router.delete("/titulos/:idTitulo", titulosController.deleteTitulo);

// == Tontos ==
// Guardar tonto del dia
router.post("/tontos", sudoAuth, tontosController.createTontoHoy);
// Obtener tonto del dia
router.get("/tontos/hoy", tontosController.getTontoHoy);
// Obtener tonto por id
router.get("/tontos/:idCowboy", tontosController.getTontoPorId);
// Obtener todos los tontos
router.get("/tontos", tontosController.getAllTontos);

// == Cowboys ==
// Obtener todos los cowboys
router.get("/cowboys", cowboysController.getAll);
// Obtener cowboy por id
router.get("/cowboys/today", cowboysController.getToday);

module.exports = router;

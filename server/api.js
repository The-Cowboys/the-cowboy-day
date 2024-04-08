const { standardAuth, sudoAuth } = require("./auth/auth.middleware");
const express = require("express");
const router = express.Router();

const tontosController = require("./tontos/tontos.controller");
const titulosController = require("./titulos/titulos.controller");
const usuariosController = require('./usuarios/usuarios.controller');

const cowboysRoute = require("./cowboys/cowboys.route"); // TODO: remove
const putosRoute = require("./putos/putos.route"); // TODO: remove

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
// Obtener tonto del dia
router.get("/tontos/hoy", tontosController.getTontoHoy);

// Obtener tonto por id
router.get("/tontos/:idCowboy", tontosController.getTontoPorId);

// Obtener todos los tontos
router.get("/tontos", tontosController.getAllTontos);

// == Usuarios ==
// Registrar usuario
router.post('/registrar', usuariosController.registrar);
// Iniciar sesión
router.post('/login', usuariosController.login);

module.exports = router;

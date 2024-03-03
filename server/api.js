const express = require("express");
const router = express.Router();

const titulosController = require("./titulos/titulos.controller");

const cowboysRoute = require("./cowboys/cowboys.route");
const putosRoute = require("./putos/putos.route");

router.use("/cowboys", cowboysRoute);
router.use("/putos", putosRoute); // TODO: remove

// Solicitud `GET /cowboys/idCowboy/titulos` para obtener los títulos de un cowboy por id
router.get("/cowboys/:idCowboy/titulos", titulosController.getCowboyTitulos);
// Solicitud `POST /cowboys/idCowboy/titulos` para crear un titulo al un cowboy por id
router.post("/cowboys/:idCowboy/titulos", titulosController.createCowboyTitulo);
// Solicitud `GET /titulos para obtener` todos los títulos
router.get("/titulos", titulosController.getAllTitulos);
// Solicitud `DELETE /titulos/:idTitulo` para obtener todos los títulos
router.delete("/titulos/:idTitulo", titulosController.deleteTitulo);

module.exports = router;

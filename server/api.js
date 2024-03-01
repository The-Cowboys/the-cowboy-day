const express = require("express");
const router = express.Router();

const titulosController = require('./titulos/titulos.controller');

const cowboysRoute = require('./cowboys/cowboys.route');
const putosRoute = require('./putos/putos.route');

router.use('/cowboys', cowboysRoute);
router.use('/putos', putosRoute); // TODO: remove

router.get( '/cowboys/:idCowboy/titulos', titulosController.getCowboyTitulos);
router.post('/cowboys/:idCowboy/titulos', titulosController.createCowboyTitulo);

router.get('/titulos', titulosController.getAllTitulos);
router.delete('/titulos/:idTitulo', titulosController.deleteTitulo);

module.exports = router;

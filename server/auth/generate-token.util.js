const authService = require("./auth.service");
const { ROL_SUDO } = require("./../usuarios/roles");
const { ESTADO_ACTIVO } = require("./../usuarios/estados");

const sudo = authService.generateAccessToken(
  "tonto@thecowboys.one",
  ROL_SUDO,
  ESTADO_ACTIVO,
  '1 year',
);

console.log('out token  :', sudo);
console.log('out decoded:', authService.getAuthUser(sudo));
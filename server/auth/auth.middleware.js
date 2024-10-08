const authService = require("./auth.service");

const { ROL_USUARIO, ROL_SUDO } = require("./../usuarios/roles");

function checkRole(req, res, next, rolRequerido) {
  try {
    const accessToken = req.header("Authorization").replace("Bearer ", "");
    const user = authService.getAuthUser(accessToken);

    if (rolRequerido !== user.rol) {
      throw new Error("No autorizado");
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);

    res.status(403).json({ message: "Token invalido" });
  }
}

function standardAuth(req, res, next) {
  checkRole(req, res, next, ROL_USUARIO);
}

function sudoAuth(req, res, next) {
  checkRole(req, res, next, ROL_SUDO);
}

module.exports = {
  standardAuth,
  sudoAuth,
};

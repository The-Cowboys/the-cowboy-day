const authService = require("./auth.service");

function checkRole(req, res, next, role) {
  try {
    const accessToken = req.header("Authorization").replace("Bearer ", "");
    const user = authService.getAuthUser(accessToken);

    if (role && role !== user.role) {
      throw new Error("No autorizado");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token invalido" });
  }
}

function standardAuth(req, res, next) {
  checkRole(req, res, next);
}

function sudoAuth(req, res, next) {
  checkRole(req, res, next, "sudo");
}

module.exports = {
  standardAuth,
  sudoAuth,
};

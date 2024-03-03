const authService = require("./auth.service");

const securedMethods = new Set(["POST", "PUT", "DELETE"]);

function verifyToken(req, res, next) {
  if (!securedMethods.has(req.method)) return next();

  try {
    const accessToken = req.header("Authorization").replace("Bearer ", "");
    const user = authService.getAuthUser(accessToken);
    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token invalido" })
  }
}

module.exports = verifyToken;

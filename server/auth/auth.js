const jwt = require("jsonwebtoken");

const secret = process.env.TOKEN_SECRET;

const securedMethods = new Set([
  "POST",
  "PUT",
  "DELETE"
]);

function generateAccessToken(data) {
  return jwt.sign(data, secret, { expiresIn: 604800 });
}

function verifyToken(req, res, next) {
  const error = () => res.status(403).json({ message: "Token invalido" });

  if (!securedMethods.has(req.method)) return next();

  const authHeader = req.headers["authorization"];
  if (!authHeader) return error();

  const parts = authHeader.split(" ");
  if (parts.length !== 2) return error();

  jwt.verify(parts[1], secret, (err, user) => {
    if (err) return error();

    req.user = user;
    next();
  });
}

const lol = generateAccessToken(
  {
    'name': 'Jorge'
  }
);

console.log(lol);

module.exports = verifyToken;

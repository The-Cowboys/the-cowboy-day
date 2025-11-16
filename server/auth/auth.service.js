const jwt = require("jsonwebtoken");

const secret = process.env.TOKEN_SECRET;


function generateAccessToken(email, rol, estado, expiresIn = "1 week") {
  return jwt.sign(
    {
      email: email,
      rol: rol,
      estado: estado,
    },
    secret,
    { expiresIn }
  );
}

function getAuthUser(accessToken) {
  const decoded = jwt.verify(accessToken, secret);
  // TODO: fetch user from DB and validate
  return decoded;
}

module.exports = {
  getAuthUser,
  generateAccessToken,
};

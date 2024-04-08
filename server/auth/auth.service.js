const jwt = require("jsonwebtoken");

const secret = process.env.TOKEN_SECRET;


function generateAccessToken(email, rol, estado) {
  return jwt.sign(
    {
      email: email,
      rol: rol,
      estado: estado,
    },
    secret,
    { expiresIn: "1 week" }
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

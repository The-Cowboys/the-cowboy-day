const jwt = require("jsonwebtoken");

const secret = process.env.TOKEN_SECRET;

function generateAccessToken(data) {
  return jwt.sign(data, secret, { expiresIn: 604800 });
}

function getAuthUser(accessToken) {
  const decoded = jwt.verify(accessToken, secret);
  // TODO: fetch user from DB and validate
  return decoded;
}

module.exports = {
  getAuthUser,
};

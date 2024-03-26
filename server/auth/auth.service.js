const jwt = require("jsonwebtoken");

const secret = process.env.TOKEN_SECRET;

function generateAccessToken(data) {
  return jwt.sign(data, secret, { expiresIn: '1 year' });
}

function getAuthUser(accessToken) {
  const decoded = jwt.verify(accessToken, secret);
  // TODO: fetch user from DB and validate
  return decoded;
}

module.exports = {
  getAuthUser,
};

const pep = generateAccessToken({
  "name": "Elmas",
  "role": "sudo"
});

console.log(pep);
console.log(getAuthUser(pep));
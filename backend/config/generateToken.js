const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "anurag", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;

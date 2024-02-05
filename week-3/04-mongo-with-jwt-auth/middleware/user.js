const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const bearerToken = req.headers.authorization;
  const token = bearerToken.split(" ")[1];
  const admin = jwt.verify(token, JWT_SECRET);
  if (!admin) {
    return res.status(403).json("Incorrect token");
  }
  req.username = admin.username;
  next();
}

module.exports = userMiddleware;

// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const bearerToken = req.headers.authorization;
  const token = bearerToken.split(" ")[1];
  const admin = jwt.verify(token, JWT_SECRET);
  if (!admin) {
    return res.status(403).json("Incorrect token");
  }
  req.username = admin.username;
  next();
}

module.exports = adminMiddleware;

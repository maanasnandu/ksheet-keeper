//Middleware is a function
//that has access to req and res cycle/obj
//anytime we hit an endpoint we can access the middleware
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //Get token from the header
  //x-auth-token checks whether we have token
  const token = req.header("x-auth-token");

  //check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

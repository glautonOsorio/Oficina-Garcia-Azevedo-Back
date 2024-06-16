const { config } = require("dotenv");
const { verify } = require("jsonwebtoken");

async function auth(req, res, next) {
  try {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Authentication Failed",
      });
    }

    const token = authorization.split(" ")[1]; // Extract the token
    req.payload = verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({
      message: "Authentication Failed",
    });
  }
}

module.exports = { auth };

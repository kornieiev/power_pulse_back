const { HttpError } = require("../helpers");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const User = require("../models/user");
const { controllerWrapper } = require("../helpers");

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization || " ";

  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer" || token !== "") {
    HttpError(401, "Not authorized");
  }

  try {
    const JWT = jwt.verify(token, JWT_SECRET);
    const { id } = JWT;

    const user = await User.findById(id);
    // тут в req.user записується користувач, який робить запит
    req.user = user;
    if (user.token === "") {
      throw HttpError(204, "No content");
    }
    next();
  } catch (error) {
    if (
      error.name === "TokenExpiredError" ||
      error.name === "JsonWebTokenError"
    ) {
      throw HttpError(401, "JWT token is not valid");
    }
    throw error;
  }
};

module.exports = { authenticate: controllerWrapper(authenticate) };

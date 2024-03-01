const { User } = require("../../models");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const logoutUser = async (req, res, next) => {
  const authHeader = req.headers.authorization || " ";
  const [type, token] = authHeader.split(" ");

  const { id } = jwt.verify(token, JWT_SECRET);
  if (token || token !== "") {
    await User.findByIdAndUpdate(id, { token: "" }, { new: true });
    req.headers.authorization = "";
  }

  res.status(200).json("LogOut Successful");
};
module.exports = logoutUser;

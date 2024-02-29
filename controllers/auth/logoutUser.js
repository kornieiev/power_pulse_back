const { User } = require("../../models");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const logoutUser = async (req, res, next) => {
  const authHeader = req.headers.authorization || " ";
  console.log("authHeader - logoutUser", authHeader);
  const [type, token] = authHeader.split(" ");

  const { id } = jwt.verify(token, JWT_SECRET);
  console.log("token - logoutUser", token);
  if (token || token !== "") {
    console.log("token - logoutUser", token);

    await User.findByIdAndUpdate(id, { token: "" }, { new: true });
    req.headers.authorization = "";
    console.log("token-AFTER", await token);
  }

  res.status(204).json("no content");
};
module.exports = logoutUser;

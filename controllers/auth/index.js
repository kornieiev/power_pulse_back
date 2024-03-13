const { controllerWrapper } = require("../../helpers");

const registerUser = require("./registerUser");
const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");
const currentUser = require("./currentUser");
// const updateMetrics = require("./updateMetrics.js");
const updateAvatar = require("./updateAvatar.js");
const verifyEmail = require("./verifyEmail.js");
const reVerification = require("./reVerification.js");

module.exports = {
  registerUser: controllerWrapper(registerUser),
  loginUser: controllerWrapper(loginUser),
  logoutUser: controllerWrapper(logoutUser),
  currentUser: controllerWrapper(currentUser),
  // updateSubscription: controllerWrapper(updateMetrics),
  updateAvatar: controllerWrapper(updateAvatar),
  verifyEmail: controllerWrapper(verifyEmail),
  reVerification: controllerWrapper(reVerification),
};

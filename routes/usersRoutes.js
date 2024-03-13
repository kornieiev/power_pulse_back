const express = require("express");

const { authenticate, upload } = require("../middlewares");

const {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  updateAvatar,
  verifyEmail,
  reVerification,
} = require("../controllers/auth");

const {
  registerUserSchema,
  loginUserSchema,
  reVerificationSchema,
  addMetricsSchema,
} = require("../schemas/usersSchemas");

const { validateBody } = require("../helpers");
const addMetrics = require("../controllers/auth/addMetrics");
// const updateMetrics = require("../controllers/auth/updateMetrics");

const usersRouter = express.Router();

// Registration +
usersRouter.post("/register", validateBody(registerUserSchema), registerUser);

// Verification +
usersRouter.get("/verify/:verificationToken", verifyEmail);

// Re-Verification +
usersRouter.post("/verify", validateBody(reVerificationSchema), reVerification);

// Sign-in +
usersRouter.post("/login", validateBody(loginUserSchema), loginUser);

// Sign-out +
usersRouter.post("/logout", authenticate, logoutUser);

// Current user +
usersRouter.get("/current", authenticate, currentUser);

// Add Metrics
usersRouter.put(
  "/metrics",
  authenticate,
  validateBody(addMetricsSchema),
  addMetrics
);

//  User Avatar
usersRouter.post(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

module.exports = usersRouter;

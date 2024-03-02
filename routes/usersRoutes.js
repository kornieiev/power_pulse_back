const express = require("express");

const { authenticate, upload } = require("../middlewares");

const {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  reVerification,
} = require("../controllers/auth");

const {
  registerUserSchema,
  loginUserSchema,
  reVerificationSchema,
  currentUserSchema,
  subscribeUserSchema,
  addMetricsSchema,
} = require("../schemas/usersSchemas");

const { validateBody } = require("../helpers");
const addMetrics = require("../controllers/auth/addMetrics");

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

// Checking current user +
usersRouter.get(
  "/current",
  authenticate,
  validateBody(currentUserSchema),
  currentUser
);

// Add Metrics
usersRouter.post(
  "/metrics",
  // authenticate,
  validateBody(addMetricsSchema),
  addMetrics
);

//  Updating metrics
usersRouter.patch(
  "/",
  authenticate,
  validateBody(subscribeUserSchema),
  updateSubscription
);

//  Updating Avatar
usersRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

module.exports = usersRouter;

const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "User email is not valid"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password should be at least 6 characters long"],
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
      // це поле визначає чи підтвердила людина e-mail
      type: Boolean,
      default: false,
    },
    verificationToken: {
      // це поле для запису і порівняння коду підтвердження відправленого на e-mail при реєстрації
      type: String,
      required: [true, "Verify token is required"],
    },
    userMetrics: {
      // це поле визначає чи підтвердила людина e-mail
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = model("user", userSchema);

module.exports = User;

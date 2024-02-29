const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      // match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "User email is not valid"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password should be at least 6 characters long"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: true,
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = model("user", userSchema);

module.exports = User;

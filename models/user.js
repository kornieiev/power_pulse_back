const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

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
      type: Boolean,
      default: false,
    },
    avatarURL: {
      type: String,
      // required: true,
    },
    //
    height: {
      type: Number,
      default: 555,
      // required: true,
      min: 150,
    },
    userName: {
      type: String,
    },
    currentWeight: {
      type: Number,
      // required: true,
      min: 35,
    },
    desiredWeight: {
      type: Number,
      // required: true,
      min: 35,
    },
    birthday: {
      type: Date,
      // required: true,
    },

    blood: {
      type: Number,
      // required: true,
      enum: [1, 2, 3, 4],
    },
    sex: {
      type: String,
      // required: true,
      enum: ["male", "female"],
    },
    levelActivity: {
      type: Number,
      // required: true,
      enum: [1, 2, 3, 4, 5],
    },
    age: {
      type: Number,
      // required: true,
    },
    resultBMR: {
      type: Number,
    },
    // metrics: {},
    test: { type: String },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);
userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;

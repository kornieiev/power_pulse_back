const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "User email is not valid"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password should be at least 6 characters long"]
    },
    token: {
      type: String,
      default: null
    },
    verify: {
      type: Boolean,
      default: false
    },
    verificationToken: {
      type: String
      // required: [true, "Verify token is required"],
    },
    userMetrics: {
      type: Boolean,
      default: false
    },
    avatarURL: {
      type: String
    },
    height: {
      type: Number,
      min: 150
    },
    name: {
      type: String
    },
    userName: {
      type: String
    },
    currentWeight: {
      type: Number,
      min: 35
    },
    desiredWeight: {
      type: Number,
      min: 35
    },
    birthday: {
      type: Date
    },
    blood: {
      type: Number,
      enum: [1, 2, 3, 4]
    },
    sex: {
      type: String,
      enum: ["male", "female"]
    },
    levelActivity: {
      type: Number,
      enum: [1, 2, 3, 4, 5]
    },
    age: {
      type: Number
    },
    resultBMR: {
      type: Number
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);
userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;

const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const metricSchema = new Schema(
  {
    height: {
      type: Number,
      min: 150,
    },
    userName: {
      type: String,
    },
    currentWeight: {
      type: Number,
      min: 35,
    },
    desiredWeight: {
      type: Number,
      min: 35,
    },
    birthday: {
      type: Date,
    },
    blood: {
      type: Number,
      enum: [1, 2, 3, 4],
    },
    sex: {
      type: String,
      enum: ["male", "female"],
    },
    levelActivity: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
    },
    age: {
      type: Number,
    },
    resultBMR: {
      type: Number,
    },
    avatar: {},
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

metricSchema.post("save", handleMongooseError);

const Metric = model("metric", metricSchema);

module.exports = Metric;

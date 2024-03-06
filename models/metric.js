const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const metricSchema = new Schema( // схема, куда первым аргументом передается описание объекта, которое будет передаваться в базу данных
  {
    height: {
      type: Number,
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
      required: true,
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
    avatar: {},
    owner: {
      // https://youtu.be/gS0cjVI72Ok?t=2913
      // тут записуємо id userа, який додав метрику
      type: Schema.Types.ObjectId,
      // в ref вказується назва колекції, з якої буде це ObjectId
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  } // вместо создания строки на бекенде с указанием версии будет создан штамп времени создания и изменения
);

metricSchema.post("save", handleMongooseError);

const Metric = model("metric", metricSchema);

module.exports = Metric;

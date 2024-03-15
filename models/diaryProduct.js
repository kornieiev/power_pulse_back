const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const diaryProductSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    date: {
      type: String,
      match: /^\d{2}-\d{2}-\d{4}$/,
      require: true || date,
    },
    consumedCalories: {
      type: Number,
      default: 0,
    },
    totalProductWeight: {
      type: Number,
      default: 0,
    },
    productArr: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        calories: {
          type: Number,
          minimum: 1,
          require: true,
        },
        amount: {
          type: Number,
          minimum: 1,
          require: true,
        },
        title: {
          type: String,
          required: [true, "Define product title"],
        },
        category: {
          type: String,
          required: [true, "Define product category"],
        },
      },
    ],
  },
  { versionKey: false }
);

diaryProductSchema.post("save", handleMongooseError);

const DiaryProduct = model("diaryProduct", diaryProductSchema);

module.exports = DiaryProduct;

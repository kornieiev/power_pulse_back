const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Define product title"],
    },
    weight: {
      type: Number,
      required: [true, "Define product weight"],
    },
    calories: {
      type: Number,
      required: [true, "Define product calories"],
    },
    category: {
      type: String,
      ref: "productsCategory",
      required: true,
    },
    groupBloodNotAllowed: {
      1: { type: Boolean, default: false },
      2: { type: Boolean, default: false },
      3: { type: Boolean, default: false },
      4: { type: Boolean, default: false },
    },
  },
  { versionKey: false }
);

productSchema.post("save", handleMongooseError);
const Product = model("products", productSchema);

module.exports = Product;

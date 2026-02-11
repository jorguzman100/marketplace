const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  sku: { type: String, required: true },
  productName: { type: String, required: true },
  categoryName: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String, required: true },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "seller",
  },
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "store",
  },
  picture: { type: String, required: true },
  picture2: { type: String, required: true },
  picture3: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

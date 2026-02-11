const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryName: { type: String, required: true },
  products: {
    type: Schema.Types.ObjectId,
    ref: "product"
  }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
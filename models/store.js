const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  storeName: { type: String, required: true },
  storePicture: { type: String, required: true },
  products: [
    {
      type:Schema.Types.ObjectId,
      ref: "product"
    }
  ],
  seller: {
    type: Schema.Types.ObjectId,
    ref: "seller"
  }
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
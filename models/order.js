const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [{}],
  storeID: Array,
  customerID: {
    type: Schema.Types.ObjectId,
    ref: "consumer"
  },
  orderStatus: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  Date: { type: Date, default: Date.now },
  deliveryAddress: {
    street: String,
    number: String,
    neighborhood: String,
    zipCode: String,
    country: String,
    state: String
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
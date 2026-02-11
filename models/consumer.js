const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const consumerSchema = new Schema({
  userName: { type: String, required: true },
  userType: {type: String, required: true},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  consumerAddress: {
    street: String,
    number: String,
    neighborhood: String,
    zipCode: String,
    country: String,
    state: String
  },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  picture: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  memberSince: { type: Date, default: Date.now },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "order"
    }
  ]
});

const Consumer = mongoose.model("Consumer", consumerSchema);

module.exports = Consumer;
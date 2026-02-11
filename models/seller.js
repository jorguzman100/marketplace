const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  picture: { type: String, required: true },
  storeId: { 
    type: Schema.Types.ObjectId, 
    ref: "store" 
  },
  memberSince: { type: Date, default: Date.now }
});

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
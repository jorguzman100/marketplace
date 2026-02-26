// Load env vars before reading process.env values below.
require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

// Stripe library
const stripeSecretKey =
  process.env.STRIPE_SECRET_KEY || process.env.STRIPE_TEST_SECRET_API_KEY;
const stripe = stripeSecretKey ? require("stripe")(stripeSecretKey) : null;

if (!stripeSecretKey) {
  console.warn(
    "Stripe secret key is not configured. Set STRIPE_SECRET_KEY (preferred) or STRIPE_TEST_SECRET_API_KEY."
  );
}


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log('***** process.env.NODE_ENV: ***** ', process.env.NODE_ENV);

// Serve up static assets (usually on heroku)
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "client/build");

  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });

} else {
  app.use('/static', express.static(path.join(__dirname, 'client/public')))
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);



// Stripe
const calculateOrderAmount = (items) => {
  return items.reduce((total, item) => {
    const price = Number(item.price);
    const quantity = Number(item.quantity || 1);
    return total + (price * quantity);
  }, 0) * 100;
};



// A PaymentIntent tracks the customer's payment lifecycle, keeping track of any failed payment attempts and ensuring the customer is only charged once. Return the PaymentIntent's client secret in the response to finish the payment on the client.
app.post("/create-payment-intent", async (req, res) => {
  try {
    if (!stripe) {
      return res.status(500).json({
        error: "Stripe is not configured on the server.",
      });
    }

    const { items } = req.body;

    console.log("Incoming items:", items);

    const amount = calculateOrderAmount(items);
    console.log("Calculated amount:", amount);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd"
    });

    res.json({ clientSecret: paymentIntent.client_secret });

  } catch (error) {
    console.error("Stripe Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});



// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

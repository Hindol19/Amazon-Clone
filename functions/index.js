const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MAaXVSH2lpDEHTiKHdrETyoqErSFOYR1SAtMxsGKkp8h6CkmeDTzBqqRXgvftgCnHkymj6nyz8XcScA7XcHvuVg00bNNHIQ8o"
);
//API
//-App config
const app = express();
//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get("/", function (req, res) {
  return res.status(200).send("Hello World");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Recieved for: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    shipping: {
      name: "Jenny Rosen",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
    amount: total, //subunits of the currency
    currency: "usd",
    description: "Test Desc",
  });
  //201: OK Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-Listen command
exports.api = functions.https.onRequest(app);
// http://127.0.0.1:5001/clone-2f9b2/us-central1/api

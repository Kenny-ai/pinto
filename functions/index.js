const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I00AaIKat0D8jptKexCUrGWKYoWbyxZvTeC9k47Bbl7Q17kRIod2CN1kdTzjT52EDHUi4ZUHSw3iXg7CaBrwYwy008LDj9QvJ');

// API

// - App config
const app = express();

// - Middlwares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
 
  console.log('Payment Request Recieved for this amount >>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd"
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  })
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/pinto-52dda/us-central1/api
// http://localhost:5001/pinto-52dda/us-central1/api
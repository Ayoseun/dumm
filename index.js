const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());
const baseurl = "https://orokii-ppg-gateway-api-730399970440.us-central1.run.app/api/v1"
// Route for ping
app.get('/ping', (req, res) => {
  res.send('Pong');
});

// Route to initiate payment
app.post('/payment/simple-card-tokenized', async (req, res) => {
  try {
    const paymentData = req.body;  // Get the request body

    const response = await axios.post(
      baseurl+'/payment/simple-card-tokenized',
      paymentData
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error initiating payment');
  }
});

app.post('/payment/tokenized-payment', async (req, res) => {
  try {
    const paymentData = req.body;  // Get the request body

    const response = await axios.post(
      baseurl+'/payment/tokenized-payment',
      paymentData
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error initiating payment');
  }
});

// New route to process card payment
app.post('/payment/payment-ach', async (req, res) => {
  try {
    const paymentData = req.body;  // Get the request body

    const response = await axios.post(
      baseurl+'/payment/payment-ach',
      paymentData
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing payment');
  }
});

app.post('/payment/payment-ach-token-id', async (req, res) => {
  try {
    const paymentData = req.body;  // Get the request body

    const response = await axios.post(
      baseurl+'/payment/payment-ach-token-id',
      paymentData
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing payment');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
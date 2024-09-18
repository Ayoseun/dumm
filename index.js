const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Route for ping
app.get('/ping', (req, res) => {
  res.send('Pong');
});

// Route to initiate payment
app.post('/initiate-payment', async (req, res) => {
  try {
    const paymentData = req.body;  // Get the request body

    const response = await axios.post(
      'https://card-payment-00001-fxn-t7xgy74vla-uk.a.run.app/api/v1/cardpayment/initiate',
      paymentData
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error initiating payment');
  }
});

// New route to process card payment
app.post('/process-payment', async (req, res) => {
  try {
    const paymentData = req.body;  // Get the request body

    const response = await axios.post(
      'https://card-payment-00001-fxn-t7xgy74vla-uk.a.run.app/api/v1/cardpayment/pay',
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
const express = require('express');
const cors = require("cors");
const apiRoute = require('./api');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('frontend/dist'));

app.use('/api', apiRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running`);
});
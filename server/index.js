const express = require('express');
const app = express();
const PORT = 3000;

const apiRoute = require('./api');

app.use(express.json());
app.use(express.static('frontend/dist'));

app.use('/api', apiRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running`);
});
require('dotenv').config()

const express = require('express');
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const RateLimit = require("express-rate-limit");

const apiRoute = require('./api');

const app = express();
const PORT = 3000;

const web = express.static('frontend/dist');

// Set up rate limiter: maximum of twenty requests per minute
const limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minute
  max: 100,
});


const hlmetHeaders = helmet.contentSecurityPolicy({
  directives: {
    "script-src": ["'self'", "fonts.googleapis.com"],
  },
});

// gzip compression
app.use(compression());
// set security HTTP headers
app.use(hlmetHeaders);
//  apply to all requests
app.use(limiter);
// enable cors
app.use(cors());
// parse json request body
app.use(express.json());
// static files
app.use(express.static('frontend/dist'));

app.use('/', web);
app.use('/api', apiRoute);
app.use('*', web);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running`);
});
require("dotenv").config()

const express = require("express");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const RateLimit = require("express-rate-limit");

const apiRoute = require("./api");

const app = express();
const PORT = 3000;

const web = express.static("frontend/dist");

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000,
  max: 2,
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

// enable cors
app.use(cors());

// parse json request body
app.use(express.json());

// static files
app.use(express.static("frontend/dist"));

app.use("/api", limiter, apiRoute);
app.use("*", web);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running`);
});

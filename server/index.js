const express = require("express");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const RateLimit = require("express-rate-limit");

const apiRoute = require("./api");

const app = express();
const PORT = 3001;

const web = express.static("frontend/dist");

// Set up rate limiter: maximum of twenty requests per minute
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100,
});

app.use(compression());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "fonts.googleapis.com"],
    },
  })
);
app.use(limiter);
app.use(cors());
app.use(express.json());
app.use(express.static("frontend/dist"));
app.use("/", web);

app.use("/api", apiRoute);

app.use("*", web);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running`);
});

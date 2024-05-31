require("dotenv").config();
require('express-async-errors');
const express = require("express");
const { ValidationError } = require("sequelize");
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.json());

const routes = require("./routes");
app.use("/", routes);

// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = 'Resource Not Found';
  err.errors = { message: "The requested resource couldn't be found." };
  err.status = 404;
  next(err);
});

// Error handlers. (must have all four arguments to communicate to Express that
// this is an error-handling middleware function)

// Process sequelize errors
app.use((err, req, res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Sequelize Error";
    err.status = 400;
  }
  next(err);
});

app.use((err, req, res, next) => {
  const statusCode = err.status || 500
  res.status(statusCode);
  const isProduction = process.env.NODE_ENV === "production";
  res.json({
    title: err.title || "Server Error",
    statusCode,
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log('Server is listening on port', port));

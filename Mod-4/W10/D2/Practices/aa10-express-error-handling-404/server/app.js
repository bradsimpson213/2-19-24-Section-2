const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});


// resource not found middlewear
app.use((req, res, next) => {
  const err = new Error('Sorry, the requested resource couldn\'t be found.');
  err.statusCode = 404;
  err.message = 'Sorry, the requested resource couldn\'t be found.';
  next(err);
});


// Catch-all error-handling middleware
app.use((err, req, res, next) => {
  console.log("ERROR", err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode);
  res.send(err)
  // res.json({
  //   message: err.message || 'Something went wrong',
  //   statusCode
  // });
});


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

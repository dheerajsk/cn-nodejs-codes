const express = require('express');

// Create a server.

const server = express();

// Handle default request.

server.get('/', (req, res, next) => {
  res.send('first middleware hit')
  next()
});

server.get('/', (req, res) => {
  res.send('Hello world! This is Express Server');
});

// Listen on specified port.
server.listen(3100, () => {
  console.log('Server is listening at http://localhost:3200');
});

const express = require('express');
const { port, host } = require('./config');

const api = express();

api.get('/', (req, res) => {
  res.send('Hello World!');
});

api.listen(port, host, () => {
  console.log(`listening at: http://${host}:${port}`);
});

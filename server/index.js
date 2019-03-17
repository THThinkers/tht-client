const express = require('express');
const path = require('path');
const config = require('../config/webpack.config.prod');

const app = express();

app.use(express.static(path.join(__dirname, config.output.publicPath)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + config.output.path, 'index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Server is listening on port ' + port);
});

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.disable('x-powered-by');
app.use(bodyParser.json())
app.use(cors());

function init() {
  const httpServer = http.createServer(app);
  return httpServer;
}

module.exports.init = init;
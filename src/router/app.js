const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const songsRoutes = require('./routes/songs/routes');

const app = express();

app.disable('x-powered-by');
app.use(bodyParser.json())
app.use(cors());

function init() {
  app.use('/songs', songsRoutes);
  
  const httpServer = http.createServer(app);
  return httpServer;
}

module.exports.init = init;
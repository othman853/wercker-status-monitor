const express = require('express');
const { readFileSync } = require('fs');
const {
  VIEWS_PATH,
  STATICS_PATH,
  SOCKET_CLIENT_PATH,
  BULMA_PATH
} = require('value-box').paths;

const sendStatic =
  staticPath => (_, res) => res.send(readFileSync(staticPath));

module.exports = app => {
  app.set('views', VIEWS_PATH);
  app.set('view engine', 'ejs');
  app.use(express.static(STATICS_PATH));

  app.get('/js/socket-client.js', sendStatic(SOCKET_CLIENT_PATH));
  app.get('/css/bulma.css', sendStatic(BULMA_PATH));

  return app;
};

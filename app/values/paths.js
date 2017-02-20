const { join } = require('path');
const { resolve } = require;

module.exports = {
  VIEWS_PATH: join(__dirname, '..', 'views'),
  STATICS_PATH: join(__dirname, '..', 'public'),
  BULMA_PATH: resolve('bulma/css/bulma.css'),
  SOCKET_CLIENT_PATH: resolve('socket.io-client/dist/socket.io.min.js')
};

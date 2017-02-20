const { createServer } = require('http');
const socketIo = require('socket.io');

module.exports = app => {

  const httpServer = createServer(app);
  const socketServer = socketIo(httpServer);

  return { httpServer, socketServer };

};

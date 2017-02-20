const express = require('express');
const statics = require('./statics');
const routes = require('./routes');
const createServers = require('./create-servers');
const transform = require('./transform');
const { wercker } = require('value-box');

const app = routes(statics(express()));

const { httpServer, socketServer } = createServers(app);

socketServer.on('connect', socket => {
  socket.emit('update', transform(wercker));
  socket.on('refresh', socket.emit.bind(socket, 'update', transform(wercker)));
});

module.exports = httpServer;

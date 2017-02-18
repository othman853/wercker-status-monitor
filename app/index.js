require('value-box/path')(__dirname, ['/stubs']);
const express = require('express');
const socketIo = require('socket.io');
const transform = require('./transform');
const { createServer } = require('http');
const { wercker } = require('value-box');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/wercker', (req, res) => res.json(transform(wercker)));
app.get('/', (req, res) => res.render('index.ejs'));

const httpServer = createServer(app);
const socketServer = socketIo(httpServer);

httpServer.listen(3000, console.log.bind(console, 'Up'));

socketServer.on('connect', (socket) => {
  socket.emit('update', transform(wercker));
  socket.on('refresh', socket.emit.bind(socket, 'update', transform(wercker)));
});

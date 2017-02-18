socket.on('update', function(data) {
  console.log(data);
});

document
  .getElementById('refresh')
  .addEventListener('click', socket.emit.bind(socket, 'refresh'));

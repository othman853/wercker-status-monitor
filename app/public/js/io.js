const IO = function(socket, dom) {

  socket.on('update', function(data) {
    console.log(data);
    data.forEach(build => dom.appendBuild(build));
  });

  dom.setClickById('refresh', socket.emit.bind(socket, 'refresh'));

};

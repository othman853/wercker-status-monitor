require('value-box/path')(__dirname, ['/app/stubs', '/app/values']);

const app = require('./app');

app.listen(3000, console.log.bind(console, 'Up'));

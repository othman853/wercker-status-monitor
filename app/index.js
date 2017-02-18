require('value-box/path')(__dirname, ['/stubs']);
const transform = require('./transform');
const { wercker } = require('value-box');


console.log(JSON.stringify(transform(wercker)));

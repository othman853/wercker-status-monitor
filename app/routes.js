const processor = require('./processors/wercker-workflow-processor.js');
const { werckerWorkflow } = require('value-box');
const os = require('os');

module.exports = app => {
  app.get('/', (req, res) => res.render('index.ejs'));
  app.get('/workflow', (req, res) => res.json(processor(werckerWorkflow)));
  app.post('/push', (req, res) => res.sendStatus(200));
  app.get('/host', (req, res) => {

    var interfaces = os.networkInterfaces();
    var addresses = [];
    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                addresses.push(address.address);
            }
        }
    }
    return res.json({ ip: addresses[0], port: 3000 });
  });

  return app;
}

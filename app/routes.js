const processor = require('./processors/wercker-workflow-processor.js');
const { werckerWorkflow } = require('value-box');

module.exports = app => {
  app.get('/', (req, res) => res.render('index.ejs'));
  app.get('/workflow', (req, res) => res.json(processor(werckerWorkflow)));
  app.post('/push', (req, res) => res.sendStatus(200));
  return app;
}

module.exports = app => {
  app.get('/', (req, res) => res.render('index.ejs'));
  app.post('/push', (req, res) => res.sendStatus(200));
  return app;
}

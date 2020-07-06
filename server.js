const express = require('express')
const next = require('next')
const morgan = require('morgan');

const bodyParser = require('body-parser');
const compression = require('compression');
const cookieSession = require('cookie-session');
const http = require('http');




const port = parseInt(process.env.PORT, 10) || 3030
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


// console.log('events', routes)

app.prepare().then(() => {
  const server = express()
  const httpServer = http.Server(server);

  server.use(morgan(/* format string here */));

  const db = require('./API/models');
  const routes = require('./API/routes');
  server.use(compression());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(
    cookieSession({
      name: 'session',
      keys: ['key1', 'key2'],
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
  );


  server.use('/', routes);
  server.get('*', (req, res) => handle(req, res));

  // server.get('/a', (req, res) => {
  //   return app.render(req, res, '/a', req.query)
  // })

  // server.get('/b', (req, res) => {
  //   return app.render(req, res, '/b', req.query)
  // })

  // server.all('*', (req, res) => {
  //   return handle(req, res)
  // })





  server.listen(port, async (err) => {
    db.sequelize.sync({ force: true }) // DROPS TABLE AND STARTS AGAIN with force: true. Need to run seed

    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
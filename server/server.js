const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const apiUrl = '/api/v1';
const authData = require('../server/data/auth');
const userData = require('../server/data/users');

server.post(`${apiUrl}/token`, (req, res, next) => {
  res.status(200).send(authData.getToken);
});

server.get(`${apiUrl}/users/me`, (req, res, next) => {
  res.status(200).send(userData.getMe);
});

server.listen(3000, () => {
  console.log('JSON server listening on port 3000');
});
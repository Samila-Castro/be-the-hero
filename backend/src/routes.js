const express = require('express');

const OngController = require('./controllers/OngController')

const INcidentController = require('./controllers/INcidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');
const routes = express.Router();


routes.post('/sessions',SessionController.create);


routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', INcidentController.create);
routes.get('/incidents', INcidentController.index);
routes.delete('/incidents/:id',INcidentController.delete);

module.exports = routes;
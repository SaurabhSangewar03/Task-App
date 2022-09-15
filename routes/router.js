const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);

route.get('/add-task', services.add_task);

// API
route.post('/api/task', controller.create);
route.get('/api/task', controller.find);
route.delete('/api/task/:id', controller.delete);



module.exports = route;
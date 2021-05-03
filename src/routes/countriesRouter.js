const express = require('express');

const countriesRouteController = require('../controllers/countriesRouteController');
const countryRouteController = require('../controllers/countryRouteController');

const countriesRouter = express.Router();

function routes() {
  countriesRouter
    .route('/')
    .get(countriesRouteController.get)
    .post(countriesRouteController.post)
    .put(countriesRouteController.put)
    .delete(countriesRouteController.deleter);
  countriesRouter
    .route('/:codeId')
    .get(countryRouteController.get);

  return countriesRouter;
}

module.exports = routes;

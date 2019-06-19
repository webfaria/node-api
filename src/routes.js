const express = require('express');
const routes = express.Router();

const ProdutoController = require('./controllers/ProdutoController')

routes.get("/produtos", ProdutoController.index);
routes.post('/produtos', ProdutoController.store);

module.exports = routes;

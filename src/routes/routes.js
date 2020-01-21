const { Router } = require('express')
const ContaCorrenteController = require('../controllers/ContaCorrenteController')

const routes = new Router();

routes.get('/index', ContaCorrenteController.index)

module.exports = routes
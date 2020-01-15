const { Router } = require('express')
const TesteController = require('../controllers/TesteController')

const routes = new Router();

routes.get('/teste', TesteController.index)

module.exports = routes
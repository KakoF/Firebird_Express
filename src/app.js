const express = require('express')
const routes = require('./routes/routes')
const dotenv = require('dotenv')
const path = require('path')
const args = require('yargs').argv;

dotenv.config({ path: path.resolve(__dirname, `../config/${args.ENVIRONMENT}.env`) });
class App {
  constructor() {
    this.server = express()
    //this.server.use(firebird)
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.server.use(express.json())
  }

  routes () {
    this.server.use(routes)
  }
  


}

module.exports = new App().server
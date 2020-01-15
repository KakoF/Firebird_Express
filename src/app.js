const express = require('express')
const routes = require('./routes/routes')


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
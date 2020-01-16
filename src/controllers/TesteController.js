const Teste = require('../models/Teste')

class TesteController {

  async index (req, res) {
    try {
     Teste.find((result, erro) => {
       if(erro){
         return res.status(500).send(erro)
       }
       res.status(200).send({ teste: result })
      })
    } catch (error) {
      res.status(500).send(error)
    }
  }

}

module.exports = new TesteController()
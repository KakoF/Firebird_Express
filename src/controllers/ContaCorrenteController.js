const ContaCorrente = require('../models/ContaCorrente')

class ContaCorrenteController {

  async index (req, res) {
    try {
      let conta = new ContaCorrente()
      await conta.all()
        .then(result =>{
          res.status(200).send({ resultado: result })
        })
        .catch(erro =>{
          res.status(500).send(erro)
        })
    } catch (error) {
      res.status(500).send(error)
    }
  }

}

module.exports = new ContaCorrenteController()
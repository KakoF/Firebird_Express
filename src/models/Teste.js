var Firebird = require('node-firebird');
var options = require('../../config/firebirdConfig')

class Teste {

  async find(callback){
    Firebird.attach(options, function (err, db) {
      if (err)
        callback(null, err)
      db.query('SELECT * FROM dda_mensagem_campos', function (err, result) {
        callback(result, err)
      });
      db.detach();
    });
  }
}


module.exports = new Teste()
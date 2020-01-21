var Firebird = require('node-firebird');
const stream = require('stream');
var options = require('../../config/firebirdConfig')

const table = 'contacorrente'
class ContaCorrente {
  constructor() {
    this._collums = '*'
  }

  get collums () {
    return this._collums
  }
  set collums (collums) {
    this._collums = collums
  }

  async all(callback){
    const input = this._collums
    Firebird.attach(options, function (err, db) {
      if (err)
        callback(null, err)

      console.time('Quanto tempo demorou a consulta de todas as contas?');
      db.query(`SELECT ${input} FROM ${table}`, function (err, result) {
        console.timeEnd('Quanto tempo demorou a consulta de todas as contas?');
        callback(result, err)
      });
      db.detach();
    });
  }

}


module.exports = ContaCorrente
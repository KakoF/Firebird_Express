
const options = {
  host: '10.25.0.46',
  port: 3050,
  database: 'd:/banco/bdcredi.fdb',
  user: 'SYSDBA',
  password: 'masterkey',
  lowercase_keys: false, // set to true to lowercase keys
  role: null,            // default
  pageSize: 4096         // default when creating database
}


module.exports = options
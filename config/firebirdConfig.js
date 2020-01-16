const options = {
  host: '10.25.0.46', //'10.25.0.46'
  port: process.env.PORT,
  database: 'D:/banco/bdcredi.fdb', //'D:/banco/bdcredi.fdb'
  user: process.env.USER,
  password: process.env.PASSWORD,
  lowercase_keys: false, // set to true to lowercase keys
  role: process.env.ROLE,            // default
  pageSize: process.env.PAGESIZE         // default when creating database
}
module.exports = options
const Pool = require('pg').Pool;

console.log('Required database');

const pool = new Pool({
  user: 'app',
  host: 'localhost',
  database: 'app_db',
  password: 'pass',
  port: 5432,
})

module.exports = pool;
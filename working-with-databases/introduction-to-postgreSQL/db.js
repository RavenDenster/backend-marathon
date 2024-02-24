const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "root",
    host: 'localhost',
    port: 5433,
    database: 'node_postgres'
})

module.exports = pool
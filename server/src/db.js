const { Pool } = require('pg');

const { DATABASE, HOST_DB, NAME_DB, PASSWORD, PORT_DB } = process.env;

const pool = new Pool({
    user: DATABASE,
    host: HOST_DB,
    database: NAME_DB,
    password: PASSWORD,
    port: PORT_DB
})

module.exports = { pool };
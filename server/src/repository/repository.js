const { pool } = require('../db');

async function createUsersDB(name, surname, email, password) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `insert into users(name, surname, email, password) 
    values($1, $2, $3, $4) returning *`;

        const result = (await client.query(sql, [name, surname, email, password])).rows;
        await client.query('COMMIT');

        return result;
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(`createDB: ${error.message}`);

        return [];
    }
}

async function authUserDB(email, password) {
    const client = await pool.connect();
    const sql = `select * from users where email = $1 and password = $2`;

    const result = (await client.query(sql, [email, password])).rows;

    return result;
}

module.exports = { createUsersDB, authUserDB };
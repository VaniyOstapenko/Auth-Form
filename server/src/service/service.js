const { createUsersDB } = require('../repository/repository');

async function createUsers(name, surname, email, password) {
    const result = await createUsersDB(name, surname, email, password);
    if (!result.length) throw new Error('empty');

    return result;
}

module.exports = { createUsers };
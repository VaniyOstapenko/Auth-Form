const { createUsersDB, authUserDB } = require('../repository/repository');

async function createUsers(name, surname, email, password) {
    const result = await createUsersDB(name, surname, email, password);
    if (!result.length) throw new Error('empty');

    return result;
}

async function authUser(email, password) {
    const result = await authUserDB(email, password);
    if (!result.length) throw new Error('empty');

    return result;
}

module.exports = { createUsers, authUser };
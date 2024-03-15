const express = require('express');
const { createUsers } = require('../service/service');
const { buildResponse } = require('../helper/buildResponse');

const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        const result = await createUsers(name, surname, email, password);
        buildResponse(res, 200, result);
    } catch (error) {
        buildResponse(res, 200, error.message);
    }
})

module.exports = route;
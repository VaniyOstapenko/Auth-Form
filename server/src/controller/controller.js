const express = require('express');
const { createUsers, authUser } = require('../service/service');
const { buildResponse } = require('../helper/buildResponse');
const createToken = require('../helper/jwt');

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

route.post('/auth', async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authUser(email, password);
        const token = createToken(result[0])
        res.cookie("Bearer", token, {
            httpOnly: false,
            secure: true,
        });
        buildResponse(res, 200, 'Success');
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
})

module.exports = route;
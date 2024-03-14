const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use((error, req, res, next) => res.send(error.message));

module.exports = app;
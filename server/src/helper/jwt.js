const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const secret = process.env.JWT_SECRET;
    const payload = user;

    const token = jwt.sign(payload, secret);

    return token;
}

module.exports = createToken;
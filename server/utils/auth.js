const jwt = require('jsonwebtoken');

//secret should go in a more secure place 
const secret = 'mysecretshhhhh';
const expiration = '2h';

module.exports = {
    //expects the user object
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
    }
}
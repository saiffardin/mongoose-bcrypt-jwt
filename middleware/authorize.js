const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    let token = req.header('Authorization');

    if (!token) return res.status(401).send('No JWT found. Access denied.');

    token = token.split(' ')[1].trim();
    console.log('-------------------------');
    console.log('token:', token)
    console.log('-------------------------');


    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return res.status(202).send({message: 'Accepted.', decode});


    } catch (error) {
        return res.status(400).send({message: 'Invalid token.', error});
    }
}
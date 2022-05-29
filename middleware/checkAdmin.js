module.exports = function (req, res, next) {
    if (req.user.role !== 'admin') return res.status(401).send({user: req.user, message: 'Forbidden'});

    next();
}
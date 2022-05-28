const userRouter = require('express').Router();
const {createUser, userLogin} = require('../controllers/user.controller');

userRouter.route('/register')
    .post(createUser)

userRouter.route('/login')
    .post(userLogin)

module.exports = {userRouter};


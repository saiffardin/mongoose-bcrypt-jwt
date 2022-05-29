const {UserModel} = require('../models/user.model');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {

    console.log('---------------------------');
    const userExists = await UserModel.findOne({email: req.body.email});

    if (userExists) return res.status(406).send('User already exists.');

    // encrypting password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPassword;

    // filtering out 'role' from req body
    const {role, ...rest} = req.body;
    req.body = rest;

    // creating a collection from model
    const newUser = UserModel(req.body);

    try {
        const result = await newUser.save();
        return res.status(200).send({message: 'user created successfully', result});
    } catch (err) {
        return res.status(400).send(err);
    }

    console.log('---------------------------')
}

const userLogin = async (req, res) => {
    const {email, password} = req.body;

    try {
        const dbUser = await UserModel.findOne({email});

        if (dbUser) {
            // Load hash from your password DB.
            const validUser = await bcrypt.compare(password, dbUser.password);
            if (!validUser) {
                return res.status(400).send("wrong password");
            }

            const jwt = dbUser.genJWT();
            return res.status(200).send({user: dbUser, jwt});
        }

        return res.status(404).send('User not found.');
    } catch (error) {
        return res.status(400).send(error);
    }
}

module.exports = {createUser, userLogin};
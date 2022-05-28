const jwt = require('jsonwebtoken');
const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 100,
    },

    email: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 100,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 1024,
    },
})

userSchema.methods.genJWT = function () {
    const token = jwt.sign({id: this._id, name: this.name}, process.env.JWT_SECRET_KEY);
    return token;
}
const UserModel = model("user_Collection", userSchema);

/** model(param1,param2)
 * "param1" is the name of collection
 * "param2" is the the schema
 */

module.exports = {UserModel};
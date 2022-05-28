const {Schema, model} = require('mongoose');

const studentSchema = Schema({
    name: {type: String, required: true},
    age: {type: Number, min: 7},
    hobbies: {
        type: Array,
        of: String,
        validate: {
            validator: (value) => value.length > 0,
            message: "There must be one hobby at least."
        }
    }
})

const Student = model("StudentCollection", studentSchema);

/** model(param1,param2)
 * "param1" is the name of collection
 * "param2" is the the schema
 */

module.exports = {Student};
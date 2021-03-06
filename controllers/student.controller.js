const {Student} = require('../models/student.model');

const createStudent = async (req, res) => {
    const student = new Student(req.body);

    console.log('req.body:', req.body);
    console.log('-------------------------');
    console.log('create operation mongoose:', student)
    try {
        const result = await student.save();
        return res.status(201).send(result);
    } catch (error) {
        return res.status(500).send({error})
    }
}

const getStudent = async (req, res) => {
    try {
        const student = await Student.find({}).sort({name: 1});
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send({error});
    }
}

const getStudentById = async (req, res) => {
    try {
        console.log('getStudentById - req:', req.params);
        const {id} = req.params;
        const student = await Student.findById(id);
        console.log('student:', student);

        res.status(200).send(student);
    } catch (error) {
        res.status(500).send({error});
    }
}

const updateStudent = async (req, res) => {
    try {
        console.log('--------------------------------');
        console.log('params:', req.params);
        console.log('body:', req.body);
        console.log('--------------------------------');

        const {id} = req.params;

        const student = await Student.findByIdAndUpdate(id, req.body, {new: true});
        console.log('updated student:', student);

        res.status(200).send(student);
    } catch (error) {
        res.status(500).send({error});
    }
}

const deleteStudent = async (req, res) => {
    try {
        const {id} = req.params;

        const student = await Student.findByIdAndDelete(id);
        console.log('deleted student:', student);

        res.status(200).send(student);
    } catch (error) {
        res.status(500).send({error});
    }
}

module.exports = {
    createStudent,
    getStudent,
    getStudentById,
    updateStudent,
    deleteStudent
}
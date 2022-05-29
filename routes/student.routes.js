const {createStudent, getStudent, getStudentById, updateStudent, deleteStudent} = require('../controllers/student.controller');

const authorize = require('../middleware/authorize');

const studentRouter = require('express').Router();

studentRouter.route('/')
    .get(getStudent)
    .post([authorize], createStudent)


studentRouter.route('/:id')
    .get(getStudentById)
    .put(updateStudent)
    .delete(deleteStudent)

module.exports = {studentRouter}
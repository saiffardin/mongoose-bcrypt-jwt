const {createStudent, getStudent, getStudentById, updateStudent, deleteStudent} = require('../controllers/student.controller');

const studentRouter = require('express').Router();

studentRouter.route('/')
    .get(getStudent)
    .post(createStudent)


studentRouter.route('/:id')
    .get(getStudentById)
    .put(updateStudent)
    .delete(deleteStudent)

module.exports = {studentRouter}
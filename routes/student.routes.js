const {createStudent, getStudent, getStudentById, updateStudent, deleteStudent} = require('../controllers/student.controller');

const authorize = require('../middleware/authorize');
const checkAdmin = require('../middleware/checkAdmin');

const studentRouter = require('express').Router();

studentRouter.route('/')
    .get(getStudent)
    .post([authorize], createStudent)


studentRouter.route('/:id')
    .get(getStudentById)
    .put([authorize], updateStudent)
    .delete([authorize, checkAdmin], deleteStudent)

module.exports = {studentRouter}
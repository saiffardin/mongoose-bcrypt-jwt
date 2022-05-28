require('dotenv').config({path: './saif.env'});

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const {studentRouter} = require('./routes/student.routes');
const {userRouter} = require('./routes/user.routes');

const app = express();
const port = process.env.PORT || 8080;
const url = process.env.DB_URL;

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// DB Connect
mongoose.connect(url)
    .then(() => console.log('Successfully connected to MongoDB.'))
    .catch(err => console.log('Connection Failed: ', err));

// middleware
app.use(express.json())
app.use('/students', studentRouter);
app.use('/api/users', userRouter);

// active server
app.listen(port, () => {
    console.log('server starting.');
})


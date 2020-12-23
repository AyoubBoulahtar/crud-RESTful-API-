const express = require('express');
const mongoose = require('mongoose');
const app = express();
const courseRouter = require('./routes/courseRoutes');


    // Connect to MongoDB

const url = 'mongodb://localhost:27017/elearning';
const connect = mongoose.connect(url, { useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

    //Parse requests of content type - application/JSON

app.use(express.json());

    //Parse requests of content type - application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));


app.use('/courses', courseRouter);

    // Listen for requests

app.listen(3000, () => console.log('server listening for requests on port 3000'))

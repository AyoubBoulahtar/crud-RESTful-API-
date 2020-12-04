const express = require('express');
const mongoose = require('mongoose');
const app = express();
const courseRouter = require('./routes/courseRoutes');


    // Connect to MongoDB

const dbURI = 'mongodb+srv://admin:admin@internship101.l64oe.mongodb.net/elearning-db?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((result) => console.log('Successfully connected to the database'))
  .catch((err)  => console.log(err)); 

    //Parse requests of content type - application/JSON

app.use(express.json());

    //Parse requests of content type - application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));


app.use('/courses', courseRouter);

    // Listen for requests

app.listen(3000, () => console.log('server listening for requests on port 3000'))

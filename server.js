const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

//Starting an express app
const app = express();

//Just for the feature
app.use(express.static('public'));

app.set('view engine', 'ejs');


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


    // Listen for requests

app.listen(3000, () => console.log('server listening for requests on port 3000'))

app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

app.use(authRoutes);

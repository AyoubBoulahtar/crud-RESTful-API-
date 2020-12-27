const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const { requireAuth } = require('./middleware/authMiddleware');

//Starting an express app
const app = express();

//Middleware
app.use(express.static('public'));
app.use(cookieParser());

// Parse requests of content type - application/JSON
app.use(express.json());

// Parse requests of content type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// View engine
app.set('view engine', 'ejs');


// Connect to MongoDB
const url = 'mongodb://localhost:27017/elearning';
const connect = mongoose.connect(url, { useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });


// Listen for requests
app.listen(3000, () => console.log('server listening for requests on port 3000'))

app.get('/', (req, res) => res.render('home'));
app.get('/courses', requireAuth, (req, res) => res.render('courses'));

app.use(authRoutes);

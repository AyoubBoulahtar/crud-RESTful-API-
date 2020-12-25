const User = require('../models/user');


module.exports.signup_get = (req, res) => {
    res.render('SignUp');
}

module.exports.signin_get = (req, res) => {
    res.render('SignIn');
}

module.exports.signup_post = async (req, res) => {
    
}

module.exports.signin_post = async (req, res) => {
    res.send('Logged in successfully');
}
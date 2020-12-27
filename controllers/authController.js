const User = require('../models/user');
const { handleErrors } = require('../middleware/authMiddleware');
const { createToken } = require('../middleware/authMiddleware');


const signup_get = (req, res) => {
    res.render('SignUp');
}

const signin_get = (req, res) => {
    res.render('SignIn');
}

const maxAge = 3 * 24 * 60 * 60;

const signup_post = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    try {
        const user = await User.create({firstName, lastName, email, password});
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({user: user._id});
    }
    catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
}

const signin_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email,password)
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({user: user._id});
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

const logout_get = (req, res) => {
    res.cookie('jwt', '', {maxAge: 1});
    res.redirect('/');
}

module.exports = {
    signin_get,
    signup_get,
    logout_get,
    signup_post,
    signin_post
}
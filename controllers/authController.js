const User = require('../models/user');

//handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { firstName:'', lastName: '', email: '', password: '' };

    //duplicate error code
    if (err.code === 11000) {
        errors.email = 'This email is already registered';
        return errors;
    }

    //validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });

        return errors;
    }
};

module.exports.signup_get = (req, res) => {
    res.render('SignUp');
}

module.exports.signin_get = (req, res) => {
    res.render('SignIn');
}

module.exports.signup_post = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    try {
        const user = await User.create({firstName, lastName, email, password});
        res.status(201).json(user);
    }
    catch(err) {
        const errors = handleErrors(err);
        res.status(400).json(errors);
    }
}

module.exports.signin_post = async (req, res) => {
    res.send('Logged in successfully');
}
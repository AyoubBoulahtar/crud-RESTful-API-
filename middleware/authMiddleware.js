const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    // Check if json web token exists and valid
    if (token) {
        jwt.verify(token, 'token secret', (err,decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/signin')
            } else {
                console.log(decodedToken);
                next();
            }
        })
    }
    else {
        res.redirect('/signin');
    }
}
module.exports = { requireAuth };


const { Router } = require('express');
const authController = require('../controllers/authController');

const authRouter = Router();

authRouter.get('/signup', authController.signup_get);

authRouter.post('/signup', authController.signup_post);

authRouter.get('/signin', authController.signin_get);

authRouter.post('/signin', authController.signin_post);

module.exports = authRouter;
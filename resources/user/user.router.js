const express = require('express');
const userRouter = express.Router();
const controllers = require('./user.controller');
const formValidation = require('../../middleware/form-validation');

userRouter.post('/register', formValidation.register, controllers.register);
userRouter.post('/login', formValidation.login, controllers.login);

module.exports = userRouter;
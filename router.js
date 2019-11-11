const express = require('express');
const restRouter = express.Router();
const authMiddleware = require('./middleware/auth');

restRouter.use('/user', require('./resources/user/user.router'));
restRouter.use('/todo', authMiddleware, require('./resources/todo/todo.router'));
restRouter.use('/bucket', authMiddleware, require('./resources/bucket/bucket.router'));

module.exports = restRouter;
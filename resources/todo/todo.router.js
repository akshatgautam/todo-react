const express = require('express');
const todoRouter = express.Router();
const controllers = require('./todo.controller');
const formValidation = require("../../middleware/form-validation");

todoRouter.post('/create', formValidation.todo, controllers.createTodo);
todoRouter.post('/edit/:id', formValidation.todo, controllers.editTodo);
todoRouter.post('/delete/:id', controllers.deleteTodo);
todoRouter.post('/toggle/:id', controllers.toggleTodo);

module.exports = todoRouter;
const { validationResult } = require("express-validator");
const Todo = require("./todo.model");
const queries = require("../../queries");

const todoController = {
  createTodo: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { description, bucketId } = req.body;
      const done = false;

      const todo = new Todo({
        description,
        bucketId,
        done,
      });

      await todo.save();

      const todoId = todo._id;
      res.status(200).json({description, bucketId, done, todoId});
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },
  editTodo: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { description } = req.body;
      const todoId = req.params.id;
      const updatedTodo = await queries.editTodoQuery(todoId, description);

      res.status(200).json({description, todoId});
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const todoId = req.params.id;
      await queries.deleteTodoQuery(todoId);
      
      res.status(200).json({'deleted': true});
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },
  toggleTodo: async (req, res) => {
    try {
      const todoId = req.params.id;
      const todoStatus = await queries.fetchTodoStatus(todoId);
      const updatedTodo = await queries.toggleTodoQuery(todoId, todoStatus.done);
      
      res.status(200).json({done: !todoStatus.done});
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
};

module.exports = todoController;

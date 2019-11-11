const Bucket = require("./resources/bucket/bucket.model");
const Todo = require("./resources/todo/todo.model");

const queries = {
  bucketListQuery: async userId => {
    return Bucket.find({ userId }, "name _id").exec();
  },

  bucketTodosQuery: async bucketId => {
    return Todo.find({ bucketId }, "description status _id").exec();
  },

  editTodoQuery: async (todoId, description) => {
    return Todo.update(
      {
        _id: todoId
      },
      {
        description
      }
    );
  },

  fetchTodoStatus: async todoId => {
    return Todo.findOne({ _id: todoId }, "done").exec();
  },

  toggleTodoQuery: async (todoId, done) => {
    return Todo.update(
      {
        _id: todoId
      },
      {
        done: !done
      }
    );
  },

  deleteTodoQuery: async (todoId) => {
    return Todo.deleteOne(
      {
        _id: todoId
      }
    );
  }
};

module.exports = queries;

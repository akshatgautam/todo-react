const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
    unique: true
  },
  done: {
    type: Boolean,
    required: false
  },
  bucketId:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'buckets',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;

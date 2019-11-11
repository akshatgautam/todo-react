const mongoose = require('mongoose');

const BucketSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'users'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Bucket = mongoose.model('bucket', BucketSchema);

module.exports = Bucket;

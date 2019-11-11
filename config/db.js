const mongoose = require('mongoose');
const config = require('config');

const dbKey = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(dbKey, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
const { validationResult } = require("express-validator");
const Bucket = require("./bucket.model");
const queries = require("../../queries");

const bucketController = {
  createBucket: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name } = req.body;
      const userId = req.user.id;

      const bucket = new Bucket({
        name,
        userId
      });

      bucket.save();

      const bucketId = bucket._id;
      res.status(200).json({ name,  bucketId, userId});
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },

  fetchBuckets: async(req, res) => {
      try {
        const userId = req.user.id;
        const buckets = await queries.bucketListQuery(userId);

        res.status(200).json({ buckets });
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
  },

  fetchBucketTodos: async (req, res) => {
      try {
          const bucketId = req.params.id;

          const todos = await queries.bucketTodosQuery(bucketId);
          res.status(200).json({ todos });
      } catch (error) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
  }
};

module.exports = bucketController;

const express = require('express');
const bucketRouter = express.Router();
const controllers = require('./bucket.controller');
const formValidation = require('./../../middleware/form-validation');

bucketRouter.post('/create', formValidation.bucket, controllers.createBucket);
bucketRouter.get('/list', controllers.fetchBuckets);
bucketRouter.get('/:id', controllers.fetchBucketTodos);

module.exports = bucketRouter;
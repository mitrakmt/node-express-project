const express = require('express')
const postsRouter = express.Router();
const postsController = require('../controllers').postsController;

postsRouter.get('/', postsController.GET);
postsRouter.post('/', postsController.POST);

module.exports = {
  postsRouter: postsRouter
}

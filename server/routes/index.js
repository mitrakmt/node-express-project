const express = require('express');

// Require routing
const usersRouter = require('./users.router').usersRouter;
const albumsRouter = require('./albums.router').albumsRouter;
const postsRouter = require('./posts.router').postsRouter;
const rootRouter = express.Router();

// Routing throughout entire app
rootRouter.use('/users', usersRouter);
rootRouter.use('/posts', postsRouter);
rootRouter.use('/albums', albumsRouter);

// Export root router
module.exports = {
  rootRouter: rootRouter
}

const postsModel = require('../models').postsModel;

const postsController = {};

postsController.GET = (req, res) => {
  postsModel.getPosts((results) => {
    console.log('results = ', results);
    res.json({
      results: results
    });
  });
};

postsController.POST = (req, res) => {
  console.log('posts POST');
  console.log('req.body = ', req.body)
  res.json({
    message: 'posts POST'
  })
}

module.exports = {
  postsController: postsController
}

const usersModel = require('../models').usersModel;

const usersController = {};

usersController.GET = (req, res) => {
  usersModel.getUsers((results) => {
    console.log('results = ', results);
    res.json({
      results: results
    });
  });
};

usersController.POST = (req, res) => {
  console.log('users POST');
  console.log('req.body = ', req.body)
  res.json({
    message: 'users POST'
  })
};

module.exports = {
  usersController: usersController
}

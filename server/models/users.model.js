const request = require('request');

const usersModel = {};

usersModel.getUsers = (callback) => {
  request('http://jsonplaceholder.typicode.com/users', function(err, request, results) {
    callback(JSON.parse(results))
  });
};

module.exports = {
  usersModel: usersModel
}

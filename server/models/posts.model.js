const request = require('request');

const postsModel = {};

postsModel.getPosts = (callback) => {
  request('http://jsonplaceholder.typicode.com/posts', function(err, request, results) {
    callback(JSON.parse(results))
  });
}

module.exports = {
  postsModel: postsModel
}

const request = require('request');

const albumsModel = {};

albumsModel.getAlbums = (req, res) => {
  request('http://jsonplaceholder.typicode.com/albums', function(err, request, results) {
    callback(JSON.parse(results))
  });
}

module.exports = {
  albumsModel: albumsModel
}

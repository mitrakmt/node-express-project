const albumsModel = require('../models').albumsModel;

const albumsController = {};

albumsController.GET = (req, res) => {
  albumsModel.getAlbums((results) => {
    console.log('results = ', results);
    res.json({
      results: results
    });
  });
}

albumsController.POST = (req, res) => {
  console.log('albums POST');
  console.log('req.body = ', req.body)
  res.json({
    message: 'albums POST'
  })
}

module.exports = {
  albumsController: albumsController
}

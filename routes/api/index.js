var
  express = require('express'),
  router = express.Router();

//router.put('/*', putApiWrapper);
//router.post('/*', postApiWrapper);
router.get('/*', get);
//router.delete('/*', deleteApiWrapper);

module.exports = router;

function get(req, res) {
  res.json(200, 'Hello world');
}


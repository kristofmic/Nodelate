var
  express = require('express'),
  router = express.Router();

router.get('/', get);

module.exports = router;

function get(req, res) {
  res.render('main/index');
}

var
  express = require('express'),
  router = express.Router(),
  users = require('./users'),
  sessions = require('./sessions');

router.post('/users', users.create);

router.get('/sessions', sessions.show);
router.post('/sessions', sessions.create);
router.delete('/sessions', sessions.destroy);

module.exports = router;



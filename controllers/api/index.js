var
  express = require('express'),
  router = express.Router(),
  users = require('./users'),
  sessions = require('./sessions');

router.post('/users', users.create);

router.get('/sessions', sessions.show);
router.post('/sessions/forgot_password', sessions.forgotPassword);
router.get('/sessions/forgot_password/:token', sessions.forgotPassword);
router.post('/sessions', sessions.create);
router.delete('/sessions', sessions.destroy);

module.exports = router;


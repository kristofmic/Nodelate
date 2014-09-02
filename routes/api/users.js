var crypto = require('crypto');

module.exports = {
  create: create
};

function create(req, res) {
  var
    sha;

  if (!req.body.email && !req.body.password) { res.json(400, 'Missing email or password. Please try again.' ); }

  sha = crypto.createHash('sha1');
  sha.update(req.body.email + req.body.password);

  res.json(200, { apitoken: sha.digest('hex') });
}
var
  mongoose = require('mongoose'),
  schema,
  User;

schema = mongoose.Schema({
  email: String,
  password: Buffer,
  token: String,
  tokenExpiration: Date,
  isActive: Boolean
});

User = mongoose.model('User', schema);

module.exports = User;
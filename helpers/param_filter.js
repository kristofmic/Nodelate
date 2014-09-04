var
  _ = require('lodash');

module.exports = whitelistParams;

function whitelistParams(whitelist, params) {
  var
    whitelistedParams = {};

  if (params) {
    _.each(whitelist, whitelistParam);
  }

  return whitelistedParams;

  function whitelistParam(key) {
    if (params[key] || params.hasOwnProperty(key)) {
      whitelistedParams[key] = params[key];
    }
  }
}
var
  Promise = require('bluebird'),
  FeedParser = require('feedparser'),
  request = require('request');

module.exports = readRSS;

function readRSS(feedUrl) {
  var
    deferredPromise = new Promise(defer);

  return deferredPromise;

  function defer(resolve, reject) {
    var
      entries = [],
      parser = new FeedParser();

    parser.on('error', handleError);
    parser.on('meta', handleMeta);
    parser.on('readable', handleReadable);
    parser.on('end', handleEnd);

    request(feedUrl).pipe(parser);

    function handleError(err) {
      reject(err);
    }

    function handleMeta(meta) {
      entries.meta = meta;
    }

    function handleReadable() {
      var
        entry = this.read();

      do {
        entries.push(entry);
        entry = this.read();
      }
      while (entry);
    }

    function handleEnd() {
      resolve(entries);
    }
  }
}


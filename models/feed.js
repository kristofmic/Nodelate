var
  mongoose = require('mongoose'),
  Promise = require('bluebird'),
  handleDeferred = require('../lib/responder').handleDeferred,
  paramFilter = require('../lib/param_filter'),
  schema,
  schemaKeys,
  feedSchema,
  Feed;

schema = {
  title: String,
  description: String,
  link: String,
  xmlurl: String,
  date: Date,
  pubdate: Date,
  author: String,
  language: String,
  image: {
    url: String,
    title: String
  },
  favicon: String,
  categories: [String]
};
schemaKeys = _.keys(schema);
feedSchema = mongoose.Schema(schema);
Feed = mongoose.model('Feed', feedSchema);


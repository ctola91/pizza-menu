import mongoose from 'mongoose';
import q from 'q';

mongoose.Promise = q.Promise;

module.exports = app => {
  let config = app.libs.config;
  let db;
  if (!config.username && !config.password && config.username === '' && config.password === '') {
    db = mongoose.connect('mongodb://' + config.url + ':' + config.port + '/' + config.database);
  }
  else {
    db = mongoose.connect('mongodb://' + config.url + ':' + config.port + '/' + config.database, {
      user: config.username,
      pass: config.password
    });
  }
  return db;
};

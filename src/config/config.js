var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'src'
    },
    port: process.env.PORT || 8888,
  },

  test: {
    root: rootPath,
    app: {
      name: 'src'
    },
    port: process.env.PORT || 8888,
  },

  production: {
    root: rootPath,
    app: {
      name: 'src'
    },
    port: process.env.PORT || 8888,
  }
};

module.exports = config[env];

var connect = require('connect'),
    fileServer = require('serve-static');

module.exports = function(path) {
  return connect().use(fileServer(path));
};

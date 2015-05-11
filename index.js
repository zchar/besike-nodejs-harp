var connect = require('connect');
var app = connect();

module.exports = function() {
  return { 
    listen: function(port) { app.listen(port); }
  };
};

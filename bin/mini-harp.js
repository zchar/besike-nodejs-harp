#!/usr/bin/env node

var createMiniHarp = require("mini-harp"),
    argv = require('minimist')(process.argv.slice(2)),
    port = argv['port'] || 4000,
    app = createMiniHarp(),

    timeMiddleware = function(request, response, next) {
      request.url == '/current-time' ? response.write((new Date()).toISOString())
        : response.write("Cannot Get " + request.url);
      response.end();
    };

console.log("Starting mini-harp on http://localhost:" + port.toString());

app
  .use(timeMiddleware)
  .listen(port);

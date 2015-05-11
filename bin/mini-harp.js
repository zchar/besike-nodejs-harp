#!/usr/bin/env node

var createMiniHarp = require("mini-harp"),
    argv = require('minimist')(process.argv.slice(2)),
    port = argv['port'] || 4000,
    path = argv._[0] || process.cwd(),
    app = createMiniHarp(path),

    timeMiddleware = function(request, response, next) {
      if (request.url == '/current-time') {
        response.write((new Date()).toISOString());
        response.end();
      } else {
        next();
      }
    };

console.log("Starting mini-harp on http://localhost:" + port.toString());

app
  .use(timeMiddleware)
  .listen(port);

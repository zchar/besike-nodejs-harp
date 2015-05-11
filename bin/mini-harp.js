#!/usr/bin/env node

var createMiniHarp = require("mini-harp"),
    argv = require('minimist')(process.argv.slice(2)),
    port = argv['port'] || 4000,
    app = createMiniHarp();

console.log("Starting mini-harp on http://localhost:" + port.toString());
app.listen(port);

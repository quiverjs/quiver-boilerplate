"use strict";
var $__quiver_45_core_47_traceur__,
    $__quiver_45_core_47_http__,
    $__config__,
    $___46__46__47_lib_47_component__;
($__quiver_45_core_47_traceur__ = require("quiver-core/traceur"), $__quiver_45_core_47_traceur__ && $__quiver_45_core_47_traceur__.__esModule && $__quiver_45_core_47_traceur__ || {default: $__quiver_45_core_47_traceur__});
var startServer = ($__quiver_45_core_47_http__ = require("quiver-core/http"), $__quiver_45_core_47_http__ && $__quiver_45_core_47_http__.__esModule && $__quiver_45_core_47_http__ || {default: $__quiver_45_core_47_http__}).startServer;
var config = ($__config__ = require("./config"), $__config__ && $__config__.__esModule && $__config__ || {default: $__config__}).config;
var main = ($___46__46__47_lib_47_component__ = require("../lib/component"), $___46__46__47_lib_47_component__ && $___46__46__47_lib_47_component__.__esModule && $___46__46__47_lib_47_component__ || {default: $___46__46__47_lib_47_component__}).main;
startServer(main, config).then((function(server) {
  console.log('Server running at port 8080...');
})).catch((function(err) {
  console.log('error starting server:', err.stack);
}));

// this file is not transpiled, so must use CommonJS and ES5

// register babel  to transpile before running tests.
require('babel-register');

// disable webpack features that mocha doesn't understand.
require.extensions['.css'] = function() {}; // css loaders are only specific to webpack

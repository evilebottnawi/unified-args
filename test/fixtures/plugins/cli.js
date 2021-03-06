#!/usr/bin/env node
'use strict';

var extend = require('xtend');
var start = require('../../..');
var config = require('../config');
var processor = require('../processor');

start(extend(config, {
  cwd: __dirname,
  processor: processor
}));

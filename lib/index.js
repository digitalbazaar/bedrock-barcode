/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const bedrock = require('bedrock');
const bwip = require('bwip-js');
const config = bedrock.config;

// load config defaults
require('./config');

// add routes
bedrock.events.on('bedrock-express.configure.routes', app => {
  app.get(config.barcode.routes.basePath, (req, res, next) => {
    bwip(req, res);
  });
});

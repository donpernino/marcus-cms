'use strict';

/**
 * cave service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cave.cave');

'use strict';

/**
 * clientes service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::clientes.clientes');

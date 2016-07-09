/**
 * Create a logger
 * @function create
 */
'use strict'

const FurLogger = require('./fur_logger')

/** @lends create */
function create (args) {
  return new FurLogger(...args)
}

module.exports = create

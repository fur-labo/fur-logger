/**
 * Logger for fur
 * @module fur-logger
 * @version 2.0.1
 */

'use strict'

const FurLogger = require('./fur_logger')
const create = require('./create')

let lib = create.bind(this)

Object.assign(lib, FurLogger, {
  FurLogger,
  create
})

module.exports = lib

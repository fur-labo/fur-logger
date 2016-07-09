/**
 * Test case for furLogger.
 * Runs with mocha.
 */
'use strict'

const FurLogger = require('../lib/fur_logger.js')
const assert = require('assert')

describe('fur-logger', function () {
  it('Fur logger', (done) => {
    let logger = new FurLogger()
    assert.ok(logger)
    logger.logImageGenerated('foo/bar.txt')
    done()
  })
})

/* global describe, it */

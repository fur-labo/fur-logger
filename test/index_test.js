/**
 * Test for index.js
 * Runs with mocha.
 */
'use strict'

const index = require('../lib/index.js')
const assert = require('assert')

describe('index', function () {
  it('Create logger.', (done) => {
    let logger = index()
    assert.ok(logger)
    done()
  })
})

/* global describe, it */

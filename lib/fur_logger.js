/**
 * Logger for fur.
 * @constructor FurLogger
 * @param {boolean} verbose - Lob verbose or not.
 */

'use strict'

const path = require('path')
const { define } = require('colorprint')

/** @lends FurLogger */
const FurLogger = define({
  /**
   * Log that a image generated.
   * @param {string} filename - Filename of the image.
   */
  logImageGenerated (filename) {
    filename = path.relative(process.cwd(), path.resolve(filename))
    this.debug(`File generated: ${filename}`)
  }
})

module.exports = FurLogger

/**
 * Logger for fur.
 * @memberof module:fur-logger/lib
 * @inner
 * @constructor FurLogger
 * @param {boolean} verbose - Lob verbose or not.
 */

"use strict";

var format = require('util').format,
    path = require('path'),
    argx = require('argx'),
    async = require('async'),
    Colorprint = require('colorprint').Colorprint;

/** @lends FurLogger */
function FurLogger(verbose) {
    var s = this;
    s.verbose = verbose;
}

FurLogger.prototype = Object.create(Colorprint.prototype);
/**
 * Log that a image generated.
 * @param {string} filename - Filename of the image.
 */
FurLogger.prototype.logImageGenerated = function logImageGenerated(filename) {
    var s = this;
    filename = path.relative(process.cwd(), path.resolve(filename));
    s.debug('File generated: ' + filename);
};

module.exports = FurLogger;

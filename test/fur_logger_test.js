/**
 * Test case for furLogger.
 * Runs with nodeunit.
 */

var FurLogger = require('../lib/fur_logger.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Fur logger'] = function (test) {
    var logger = new FurLogger();
    test.ok(logger);
    logger.logImageGenerated('foo/bar.txt');
    test.done();
};


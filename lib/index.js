/**
 * Logger for fur
 * @module fur-logger
 * @version 1.0.0
 */

"use strict";


var FurLogger = require('./fur_logger');
function furLogger(verbose){
    return new FurLogger(verbose);
}

furLogger.FurLogger = FurLogger;

module.exports = furLogger;

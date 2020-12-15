"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendError = void 0;
/**
 * Send an error to a server
 *
 * @param res
 * @param err
 */
var sendError = function (res, err) {
    var response = {
        statusCode: 500,
        error: err
    };
    return res.status(500).json(response);
};
exports.sendError = sendError;

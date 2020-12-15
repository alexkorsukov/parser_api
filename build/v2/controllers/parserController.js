"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataParser = void 0;
var utils_1 = require("../utils/utils");
var utils_2 = require("../../shared/utils");
/**
 * Controller for parsing data API V2
 *
 * @param req
 * @param res
 */
var dataParser = function (req, res) {
    var data = req.body.data;
    var parsedResult = utils_1.parseData(data);
    if (parsedResult.result === false) {
        var errorResult = parsedResult;
        return utils_2.sendError(res, errorResult.error);
    }
    var successResult = parsedResult;
    var response = {
        statusCode: 200,
        data: successResult.data
    };
    return res.status(200).json(response);
};
exports.dataParser = dataParser;

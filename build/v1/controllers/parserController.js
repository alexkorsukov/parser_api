"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataParser = void 0;
var utils_1 = require("../../shared/utils");
var utils_2 = require("../utils/utils");
/**
 * Controller for parsing data API V1
 *
 * @param req
 * @param res
 */
var dataParser = function (req, res) {
    var data = req.body.data;
    var parsedResult = utils_2.parseData(data);
    if (parsedResult.result === false) {
        var errorResult = parsedResult;
        return utils_1.sendError(res, errorResult.error);
    }
    var successResult = parsedResult;
    var response = {
        statusCode: 200,
        data: successResult.data
    };
    return res.status(200).json(response);
};
exports.dataParser = dataParser;

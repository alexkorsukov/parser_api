"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var utils_1 = require("../v2/utils/utils");
var interfaces_1 = require("../shared/interfaces");
/**
 * Testing functionality for Discount Class
 */
describe('Testing Parsing API V2', function () {
    it('Test1 Success: Data Sting = JOHN0000MICHAEL0009994567', function () {
        var data = 'JOHN0000MICHAEL0009994567';
        var result = utils_1.parseData(data);
        chai_1.expect(JSON.stringify(result.data)).equal(JSON.stringify({
            firstName: 'JOHN',
            lastName: 'MICHAEL',
            phone: '999-4567'
        }));
    });
    it('Test2 Failure: Data Sting is empty', function () {
        var result = utils_1.parseData('');
        chai_1.expect(JSON.stringify(result)).equal(JSON.stringify({
            result: false,
            error: interfaces_1.ERRORS.ERROR_100
        }));
    });
    it('Test3 Failure: Data = JOHN000KIM009994567, data format is incorrect', function () {
        var data = 'JOHN000KIM009994567';
        var result = utils_1.parseData(data);
        chai_1.expect(JSON.stringify(result)).equal(JSON.stringify({
            result: false,
            error: interfaces_1.ERRORS.ERROR_101
        }));
    });
});

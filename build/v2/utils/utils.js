"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseData = void 0;
var lodash_1 = require("lodash");
var interfaces_1 = require("../../shared/interfaces");
/**
 * Parse data
 *
 * @param data
 */
var parseData = function (data) {
    var _a, _b, _c;
    if (lodash_1.isEmpty(data)) {
        return { result: false, error: interfaces_1.ERRORS.ERROR_100 };
    }
    /*
     * RegEx for data
     *
     * - first name can be anything
     * - last name should not start with a digit
     * - phone number should be 7 digits
     */
    var res = data.match(/^(.*?)0000([^\d].*?)000(\d{7})$/);
    var firstName = (_a = res === null || res === void 0 ? void 0 : res[1]) !== null && _a !== void 0 ? _a : '';
    var lastName = (_b = res === null || res === void 0 ? void 0 : res[2]) !== null && _b !== void 0 ? _b : '';
    var phone = (_c = res === null || res === void 0 ? void 0 : res[3]) !== null && _c !== void 0 ? _c : '';
    if (lodash_1.isEmpty(firstName) && lodash_1.isEmpty(lastName) && lodash_1.isEmpty(phone)) {
        return { result: false, error: interfaces_1.ERRORS.ERROR_101 };
    }
    if (!lodash_1.isEmpty(phone)) {
        phone = phone.substring(0, 3) + "-" + phone.substring(3);
    }
    return { result: true, data: { firstName: firstName, lastName: lastName, phone: phone } };
};
exports.parseData = parseData;

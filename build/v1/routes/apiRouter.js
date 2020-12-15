"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var parserController_1 = require("../controllers/parserController");
var router = express_1.default.Router();
router.post('/parse', parserController_1.dataParser);
// other methods go here
exports.default = router;

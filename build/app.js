"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var apiRouter_1 = __importDefault(require("./v1/routes/apiRouter"));
var apiRouter_2 = __importDefault(require("./v2/routes/apiRouter"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.raw());
app.get('/', function (req, res) {
    res.send('Root');
});
app.use('/api/v1', apiRouter_1.default);
app.use('/api/v2', apiRouter_2.default);
app.listen(3000, function () {
    console.log('Example app listening at http://localhost:3000');
});

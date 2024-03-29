"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "../client/build")));
app.use(cookie_session_1.default({
    name: "app",
    keys: ["super"]
}));
app.use("/api", loginRoutes_1.default);
app.get("*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname + "../client/build/index.html"));
});
exports.default = app;

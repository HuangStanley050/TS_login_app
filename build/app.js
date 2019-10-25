"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
var app = express_1.default();
app.use("/api", loginRoutes_1.default);
exports.default = app;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get("/login", function (req, res) {
    res.send("this is login route");
});
exports.default = router;

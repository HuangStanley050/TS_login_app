"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.post("/login", function (req, res) {
    var _a = req.body, Email = _a.Email, Password = _a.Password;
    console.log(Email);
    console.log(Password);
    res.json({ msg: "login route", data: { Email: Email, Password: Password } });
});
exports.default = router;

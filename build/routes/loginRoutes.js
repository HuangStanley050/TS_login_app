"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var password = "secret";
var email = "test@test.com";
var router = express_1.Router();
router
    .post("/login", function (req, res) {
    var _a = req.body, Email = _a.Email, Password = _a.Password;
    if (Email && Password && Email === email && Password === password) {
        req.session = { loggedIn: true };
        res.json({ msg: "login route", data: req.session });
    }
    else {
        res.status(401).json({ msg: "login failed" });
    }
})
    .get("/protect", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.json({ msg: "You have hit the protected route" });
    }
    else {
        res.status(401).json({
            msg: "You are not loggedin"
        });
    }
});
exports.default = router;

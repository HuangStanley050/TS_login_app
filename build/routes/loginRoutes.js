"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var password = "secret";
var email = "test@test.com";
var router = express_1.Router();
var requireAuth = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        return next();
    }
    res.status(403);
    res.json({ msg: "You are not authorized" });
};
router
    .post("/login", function (req, res) {
    var _a = req.body, Email = _a.Email, Password = _a.Password;
    if (Email && Password && Email === email && Password === password) {
        req.session = { loggedIn: true };
        res.json({ msg: "login success" });
    }
    else {
        res.status(401).json({ msg: "login failed" });
    }
})
    .get("/protect", requireAuth, function (req, res) {
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

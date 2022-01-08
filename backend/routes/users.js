const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const authenticate = require("../authenticate");

router.get("/", authenticate.verifyUser, (req, res, next) => {
    User.find()
        .then((users) => {
            res.status = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(users);
        })
        .catch((err) => next(err));
});

router.post("/signup", (req, res) => {
    User.register(
        new User({ username: req.body.username }),
        req.body.password,
        (err, user) => {
            if (err) {
                res.status = 500;
                res.setHeader("Content-Type", "application/json");
                res.json({ err: err });
            }
            user.save((err) => {
                if (err) {
                    res.status = 500;
                    res.setHeader("Content-Type", "application/json");
                    res.json({ err: err });
                    return;
                }
                passport.authenticate("local")(req, res, () => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json({
                        success: true,
                        status: "Registration Successful!",
                    });
                });
            });
        }
    );
});

router.post("/login", passport.authenticate("local"), (req, res) => {
    const token = authenticate.getToken({ _id: req.user._id });
    res.statusCode = 200;
    res.setheader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.json({
        success: true,
        token: token,
        status: "You are successfully logged in!",
    });
});

router.get(
    "/facebook/token",
    passport.authenticate("facebook-token"),
    (req, res) => {
        if (req.user) {
            const token = authenticate.getToken({ _id: req.user._id });
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({
                success: true,
                token: token,
                status: "You are successfully logged in!",
            });
        }
    }
);

module.exports = router;
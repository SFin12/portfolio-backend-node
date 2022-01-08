const express = require("express");
const triviaRouter = express.Router();
const Trivia = require("../models/trivia.js");

triviaRouter
    .route("/")
    .get((req, res, next) => {
        Trivia.find()
            .then((trivia) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(trivia);
            })
            .catch((err) => {
                console.log(err);
                return next(err);
            });
    })
    .post((req, res, next) => {
        Trivia.create(req.body)
            .then((question) => {
                console.log("Trivia created ", question);
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(question);
            })
            .catch((err) => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported`);
    })
    .delete((req, res, next) => {
        Trivia.deleteMany()
            .then((response) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(response);
            })
            .catch((err) => next(err));
    });

triviaRouter
    .route("/:category")
    .get((req, res, next) => {
        Trivia.find({ category: req.params.category })
            .then((question) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(question);
            })
            .catch((err) => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported`);
    })
    .put((req, res, next) => {
        Trivia.findByIdAndUpdate(
            req.params.category,
            {
                $set: req.body,
            },
            {
                new: true,
            }
        )
            .then((question) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(question);
            })
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Trivia.findByIdAndDelete(req.params.category)
            .then((response) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(response);
            })
            .catch((err) => next(err));
    });

module.exports = triviaRouter;

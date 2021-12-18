const express = require("express");
const gradebookRouter = express.Router();

gradebookRouter
    .route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        res.end(`Getting gradebook Id for ${req.body.name}`);
    })
    .post((req, res) => {
        res.end(
            `Creating new google sheets gradebook named ${req.body.name}`
        );
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported`);
    })
    .delete((req, res) => {
        res.end(`Deleting ${req.body.name}`);
    });

module.exports = gradebookRouter;

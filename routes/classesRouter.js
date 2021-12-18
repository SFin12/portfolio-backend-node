const express = require("express");
const classesRouter = express.Router();

classesRouter
    .route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        res.end(`Getting class Id for ${req.body.name}`);
    })
    .post((req, res) => {
        res.end(`Creating new class tab named ${req.body.name}`);
    })
    .put((req, res) => {
        res.end(`Updating class name to ${req.body.name}`);
    })
    .delete((req, res) => {
        res.end(`Deleting ${req.body.name}`);
    });

module.exports = classesRouter;

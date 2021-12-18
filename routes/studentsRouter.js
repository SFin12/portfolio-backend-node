const express = require("express");
const studentsRouter = express.Router();

studentsRouter
    .route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        req.statusCode = 403;
        res.end(`GET operation not supported`);
    })
    .post((req, res) => {
        res.end(`Adding ${req.body.students} to current class`);
    })
    .put((req, res) => {
        res.end(`Updating current class roster to: ${req.body.students}`);
    })
    .delete((req, res) => {
        res.end(`Deleting ${req.body.deleteStudent} from current roster`);
    });

module.exports = studentsRouter;

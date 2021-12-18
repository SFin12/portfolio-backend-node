const express = require("express");
const morgan = require("morgan");
const gradebookRouter = require("./routes/gradebookRouter.js");
const classesRouter = require("./routes/classesRouter.js");
const studentsRouter = require("./routes/studentsRouter.js");
const hostname = "localhost";
const port = 3001;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/gradebook", gradebookRouter);
app.use("/classes", classesRouter);
app.use("/students", studentsRouter);


app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});


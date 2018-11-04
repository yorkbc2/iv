const router = require("express").Router();
const fs = require("fs");
const path = require("path");

module.exports = (function (dirname) {
    router.get('*', (req, res) => {
        const fileOutput = fs.readFileSync(path.resolve(dirname, "index.html"), "utf-8");
        res.setHeader("Content-Type", "text/html");
        res.status(200)
            .send(fileOutput)
            .end();
    });

    return router;
});
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var questions = [{
        title: "How to log in?",
        content: "How do I log in?",
        answerCount: 2
    }];
var port = process.env.port || 1337;
var app = express();
app.listen(port);
app.use(express.static('public'));
console.log("Listening on port " + port);
app.get("/questions", function (_req, res) {
    res.json(questions);
});
app.get("/main.js", function (_req, res) {
    res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));
});
//# sourceMappingURL=server.js.map
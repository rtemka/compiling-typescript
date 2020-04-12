"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// import * as _ from 'lodash';
var path = require("path");
var port = process.env.port || 1337;
var app = express();
var questions = [{
        title: "How to log in?",
        content: "How do I log in?",
        answerCount: 2
    },
    {
        title: "Where is the lunch room?",
        content: "I can't find it",
    },
    {
        title: "How to debug Typescript?",
        content: "Is VSCode is best tool?",
    },
];
app.use(express.static('public'));
app.get("/main.js", function (_req, res) {
    res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));
});
app.get("/questions", function (_req, res) {
    res.json(questions);
});
app.get("/new", function (req, res) {
    var question = req.query;
    questions.push(question);
    res.json({
        questions: questions,
        status: "OK"
    });
});
app.listen(port);
console.log("Listening on port " + port);
//# sourceMappingURL=server.js.map
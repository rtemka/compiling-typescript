import * as express from 'express';
// import * as _ from 'lodash';
import * as path from 'path';
import { Question } from '../@types/Question'

const port: string | number = process.env.port || 1337;
const app = express();

const questions: Question[] = [{
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
]

app.use(express.static('public'));

app.get("/main.js", (_req, res) => {

    res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));

})

app.get("/questions", (_req, res) => {

    res.json(questions);

})

app.get("/new", (req, res) => {

   const question: Question =  req.query;
   questions.push(question);

   res.json({
       questions,
       status: "OK"
   })
})

app.listen(port);
console.log("Listening on port " + port);
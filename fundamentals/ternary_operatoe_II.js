const readlinesync=require("readline-sync");
const totalmarks=readlinesync.questionInt("what are your marks");

const result=totalmarks<40? "you need to wrok hard": totalmarks<60? "yeah need improvement":totalmarks<90? "good": "toppers";
console.log(result);
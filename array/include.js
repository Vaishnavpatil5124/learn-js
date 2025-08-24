const availablesize=['S','M','L','XL','XXL'];
const readlinesync=require("readline-sync");
const usersize=readlinesync.question("what is your size");

const isavailable=availablesize.includes(usersize.toUpperCase());
console.log(isavailable);
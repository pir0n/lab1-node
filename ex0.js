"use strict";
let arr = [];
let temp_str;
var readlineSync = require('readline-sync')
for (let i = 0; i < 3; i++) {
    let word = readlineSync.prompt("Write some word: ");
    if (word.length > 3) {
        temp_str = word.substring(0, 2) + word.substring(word.length - 2, word.length);
        arr.push(temp_str);
    }
    else {
        arr.push("");
    }
    console.log(arr);
}

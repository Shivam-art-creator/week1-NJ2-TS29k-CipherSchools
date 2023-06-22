console.log("My console statement");

// syntax and declaration
// var score = 30;
// var result = 50;
// const PI = 3.14;

// console.log(score);
// console.log(result);
// console.log(PI);

/* Datatypes
1. Number
2. Strings
3. Boolean
4. Null
5. Undefined
6. Objects
7. Symbols(es6)
*/

let score = 30;  //Number
let result = "10"; // String

// BEDMAS
let finalScore = score+result;  // concatenation with strings
console.log(finalScore);  // 1010

let penality = score-result; // Mathematical
console.log(penality);  // 1010 

console.log(typeof(penality));

let totalGames = 5;
let avgScore = finalScore / totalGames;
console.log(avgScore);


// Strings 
console.log(typeof("Hello"));
// console.log(word.toUpperCase());


console.log("Hello and good evening".length);
console.log("Hello".charAt(4));


// boolean (true-1,false-0)
// True value --> any value
// False value --> 0, false,'',NaN, undefined
console.log(typeof true);
console.log(typeof false);
console.log(typeof 'five');

if("hello"){
    console.log("very true");
} else {
    console.log("very wrong");
}


console.log("hello".includes('e'));

//Null Undefined
let score1;
let result1 = null;

// console.log(typeof(score1));
// console.log(typeof(result1));

if(result1){
    console.log("very true");
} else {
    console.log("very wrong");
}
// ES5 --> functionally scoped (var)
// ES6 --> block scoped (let,const)


// scoping
// function testing(){
    //     var abc = 20;
    //     console.log(abc);
    //     // Block scope
    //     if(1){
        //         let xyz='block scoped';
        //         console.log("Inside if block :",xyz);
        //         console.log(abc);
        //     }
        //     // console.log("Outside if block",xyz);
        // }
        // testing();   // calling a function
        // console.log(abc);

   // Accessable Globally      
//  var name = "Cipher";
// let year = 2020;

// function test(){
//     console.log(name);
//     console.log(year);
// }

// test();


// Function declaration and Function Expressions


//Hoisting
// myFunc();
// // myFunc2();
// function myFunc(){
//     console.log("Inside myFunc declaration");
// }


// Function expression
// let myFunc2 = function(){
//     console.log("Inside myFunc2: function expression");
// }


// console.log(name);
// console.log(name2);
// name();
// // var name2 = "Apoorva";
// var name = function(){
//     console.log('hello');
// } 

// Function expression cant be hoisted
// var variable get hoisted but if there is any function in var and function exp i m trying to see it doesn't able to see the function above

// Arrow Functions -- ES6
// this keyword --> context

// let newFunc = () => {
//     console.log("Arrow functions created");
//     console.log(this);
// }

// newFunc();

// let funcExp = function(){
//     console.log('Function expression Created');
//     console.log(this);
// }

// funcExp();

//Another way of arrow exp
let newFunc = (name) => {  //parameter
    console.log('Arrow');
    console.log(name);
};

newFunc('cipher');  // argument

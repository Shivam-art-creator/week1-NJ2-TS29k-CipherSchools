 // ES6 Class Features

// console.log({name:'Audi'});

class Person{
    constructor(name,email,count=0){
        this.name=name;
        this.email=email;
        this.count=count;
    }

    login(){
        console.log(this.name,'has logged in');
    }
    logout(){
        console.log(this.name,'has logged out');
    }
}


// creating an instance of person class using new keyword
let person1 = new Person('John','John@gmail.com');
let person2 = new Person('Jay','Jay@gmail.com');

let person3 = new Person('Jake','Jake@lpu.com',20);


person1.login();
person2.login();
console.log(person3);

//  Number

let rollNo = new Number(10);
console.log(rollNo);

let no = new String('Nithin');
console.log(no.toUpperCase());

let obj = new Object({name:'Manas'});
console.log(obj);
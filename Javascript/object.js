// objects

let obj = {
    name:"shivam"
}

// console.log(obj);

let person = {
    name:'John',
    email:'John@wick.com',
    count:0,
    age:20,
    status:true,
    children:{
        name:'Jay'
    },
    hobbies:['reading','writing','learning','swimming',100,null],
    login(){
        // console.log(this.name,'has logged in');
        console.log(this.name,'has logged in');
        return this;
    },
    logout(){
        console.log('Logout',this.name);
    },
    updateLogin(){
        this.count++;
        console.log(this.count);
        return this;
    }
}
person.login();  //method
let clickedName = 'name';
console.log(person[clickedName]);  //but not equal to person.clickedName
console.log(typeof(person));
console.log(person.email);
console.log(person['age']);  // equivalent to person.age
console.log(person.children.name);

// person.country="India";
// console.log(person);
person['country'] = 'India';
console.log(person);

console.log(typeof(null));

console.log(this);

//Method chaining
person.login().updateLogin().updateLogin().logout();

console.log(person.count);

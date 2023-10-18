// Enumerating Properties of an Object
const user = {
    name: 'Arunkumar',
    getFullName(){
        console.log(`My name is ${this.name}`);
    }
}
// Get all the values
console.log("Objects value print in For-in Loop");
for(let key in user){
    console.log(key, user[key]);
}

// for (let key of user){
//     console.log(key);
// }
// TypeError: Object is not iterable
console.log("Objects value print in For-of Loop");
// Object.keys (Get the key value)
for (let key of Object.keys(user)){
    console.log(key);
}
// Object.entires (both key and value access)
for (let key of Object.entries(user)) {
  console.log(key);
}
// If Check the varialbe present or not.
if ('age' in user){
    console.log("yes");
}

// Object Cloning
console.log("Traditional Method (For in)");
let another = {};

// Traditional Method
for (let key in user){
    another[key] = user[key];
}

// Object.assign Method
console.log("Assign Method (Object.assign())");
let anotherObject = Object.assign({age:24},user)
console.log(anotherObject);

// Modern Method (Spread Operator(...))
console.log("Modern Method (...)");
let anotherObj = {...user};
console.log(anotherObj);

// Garbage Collection
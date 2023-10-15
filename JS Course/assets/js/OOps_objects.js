// Object in detailed
let personDetails = {
  name: "Arunkumar",
  age: 24,
  address: {
    city: "Kumbakonam",
    state: "Tamil Nadu",
  },
  // Fuction Creation
  greeting: function() {
    // // variable assigning type
    // let message = 'My name is ' + personDetails.name;
    // console.log(message);
    // another type
    let msg = `My name is ${this.name}, I'm ${this.age} years old`;
    console.log(msg);
  },
};


personDetails.greeting();

// Factory Function

function createPerson(name){
    return  {
      name,
      greeting() {
        let msg = `My name is ${this.name}.`;
        console.log(msg);
      },
    };
}

let arun = createPerson("Arunkumar")
arun.greeting();

// Constructor Functions
function PersonDetails(name){
  this.name = name,
  this.greeting = function(){
    console.log(`My name is ${this.name}.`);
  }
}
// Accessing Constructor Functions
// Object Creation 
let person = new PersonDetails("Arunkumar")

// Constructor Function Calling
person.greeting();

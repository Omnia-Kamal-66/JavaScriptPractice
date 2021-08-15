/* 
before classes there was the concept of constructor functions
instead of creating the class like e implemnted it down there , 
this class can be written as a function with the function keyword 
with any name of your choice

*/

// class Person {
//   name = "Max";
//   constructor() {
//     this.age = 30;
//   }
//   greet() {
//     console.log("Hi I am  " + this.name + "and I am  " + this.age + "years old");
//   }
// }

function Person() {
  this.age = 30;
  this.name = "Max";
  this.greet = function () {
    console.log(
      "Hi I am  " + this.name + " and I am  " + this.age + " years old"
    );
  };
}

const person = new Person();
person.greet();

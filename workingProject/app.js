/* 
before classes there was the concept of constructor functions
instead of creating the class like e implemnted it down there , 
this class can be written as a function with the function keyword 
with any name of your choice

*/

// class Person {
//   name = "Max";
//any code in the constructor will be excuted when the object gets created
//   constructor() {
//     this.age = 30;
//   }
//   greet() {
//     console.log("Hi I am  " + this.name + "and I am  " + this.age + "years old");
//   }
// }
/*

this function returns a value because of the 'new' keyword,
what the 'new ' keyword does behind the scenes it sets 'this'
equal to the object that's going to be created, so equal to an empty object,
then it adds all these properties to this empty object then it returns 'this' which is the object


*/
function Person() {
  this.age = 30;
  this.name = "Max";
  this.greet = function () {
    console.log(
      "Hi I am  " + this.name + "  and I am  " + this.age + " years old"
    );
  };
}

const person = new Person();
person.greet();

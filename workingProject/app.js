/* 
before classes there was the concept of constructor functions
instead of creating the class like e implemnted it down there , 
this class can be written as a function with the function keyword 
with any name of your choice

*/
class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = "Max";
  // any code in the constructor will be excuted when the object gets created
  constructor() {
    super();
    this.age = 30;
  }
  greet() {
    console.log(
      "Hi I am  " + this.name + "and I am  " + this.age + "years old"
    );
  }
}

/*

this function returns a value because of the 'new' keyword,
what the 'new ' keyword does behind the scenes it sets 'this'
equal to the object that's going to be created, so equal to an empty object,
then it adds all these properties to this empty object then it returns 'this' which is the object


*/

/*
- __proto__ => is present on every js object , because this shows you the connected prototype ,
so this backup object if you want to call it like this ,
this object is connected to.

-protoType property doesn't exist on every object , it exists on function objects ,
because js is a prototype-based language.

-we use constructor functions to build objects and whatever we set here in prototype property,
will be assigned as a __proto__ to any object that's built based on this constructor function

-we see here what is assigned to the prototype : is a constructor method and also of course __proto__ property 
-now this doesn't mean that our constructor function object and this person object have the same fallback object , they don't
becasues that's stored in __proto__ property for the person object ,
and in the constructor function , the prototype property is not what this function would reach out if we called something on it like toString which we can't find in the object itself,
this would be handled by __proto__ being used as a fallback


-the prototype property of our function object can be used to assign an object which will then will be assigned as __proto__ so 
as a fallback value to any objects you build based on this constructor function 

-what happens here is the same as when we use extends , it forms js that you want to set the prototype to a new object or add some new methods to that prototype .


*/
// function Person() {
//   this.age = 30;
//   this.name = "Max";
//   this.greet = function () {
//     console.log(
//       "Hi I am  " + this.name + "  and I am  " + this.age + " years old"
//     );
//   };
// }
//this is how you edit the prototype so that you don't override the defaultone and hence keep the constructor method
// Person.prototype.printAge= function() {
//     console.log(this.age);
// };

console.dir(Person);
const person = new Person();
person.greet();
person.printAge();

console.log(person.__proto__);
console.log(AgedPerson.prototype);

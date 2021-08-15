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

const p = new Person();
const p2 = new Person();
console.log(p.__proto__ === p2.__proto__);
/*
in the p object , we will find in the __proto__ the greet method , which is weird because it's a part of
the object , AgedPerson should only add a printAge method and nothing else.
-the method is part of the p __proto__ , so this is the default  __proto__ which then in turn also points at yet another __proto__ which holds our base class object 
-the function ligic soesn't change from object to object so js adds a little optimization for us,

by adding a method to a prototpe , it makes sure that when eer we create a new person object ,we use the same prototyp fallback object , the exact same object in memory

-to do the same in the constructor function , we don't add a method as a property , instead we add it to the prototype prop


*/

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
function Person() {
  this.age = 30;
  this.name = "Max";
  //   this.greet = function () {
  //     console.log(
  //       "Hi I am  " + this.name + "  and I am  " + this.age + " years old"
  //     );
  //   };
}
Person.prototype.greet = function () {
  console.log(
    "Hi I am  " + this.name + "  and I am  " + this.age + " years old"
  );
};

// this is how you edit the prototype so that you don't override the defaultone and hence keep the constructor method
// Person.prototype.printAge = function () {
//   console.log(this.age);
// };
// Person.describe = function () {
//   console.log("Creating...");
// };
// console.dir(Person);
// const person = new Person();
// person.greet();
// person.printAge();

// console.log(person);
// // console.log(AgedPerson.prototype);
// console.dir(Object);

/*
- Object is a constructor function built in js 
-if you console.dir(Object) you will find a bunch of interesting things but ,
tostring is not part of it , instead , this has it's own __proto__

-in it's __proto__ we find toString somewhere though, but that actually not the reason why we have access to toString here on our person

- Object is a constructor function with a bunch of built in prop or methods you can call.
-in the class-based world ,we would call these props and methods which you can call without intantiating an object based
on that constructor function , static props and static methods 
-so all this prps and methods in Object is static.

-indeed when you go to your class and add a static prop , this simply means that this prop is added directly 
here to your constructor function object

-Person.describe= function(){
    log('creating..')
}
now this is a property of the person object , it's not a prop that  will be added to objects created based on the constructor function
there we only add whay is inside the constructor function , this describe doesn't tweak the function body or anything like that,
instead it interacts with that function object which is created 

-Object is not the fallback object , the fallback prototype all other objects can come back to in the end.
if it ould be ,then we should be able for example call length and get a value of 1 on any object your choice.

-instead ,the fallback value of all objects is Object.prototype
this prototype prop exists on everything which is a constructor function 
and Object is just such a constructor function in the end.

it defines what will be assigned as a __proto__ for each object created based on that Object
*/
/*
there is a difference between constructor functions and classes




*/

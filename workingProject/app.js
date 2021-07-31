const numbers = [1, 2, 3];
console.log(numbers);

//niche , you won't need to use them

// //constructor function
// //caling array as a function
// //if we pass one number in parameters , it will create an array of length 5 (empty array with fixed size)
// const moreNumbers = new Array("hi", "welcome"); //you can pass as many parameters as you want , you can omit the new keyword
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

//it doesn't take multiple numbers , instead this takes an iterable or an array like object
//it allows you to convert an iterable or an array like object which is not array yet to an array

const listItems = document.querySelectorAll("li");
console.log(listItems); //this gives you a node list (an array like)

const moreNumbers = Array.from(listItems);
console.log(moreNumbers);

const hobbies = ["cooking", "sports"];
const personalData = [30, "max", { moreDetail: [] }];

const analyticsData = [
  [1, 1.6],
  [3, 4.3],
];
for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}
console.log(personalData[1]);

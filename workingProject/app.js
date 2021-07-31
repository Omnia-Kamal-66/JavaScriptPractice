const testResult = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResult = testResult ; //if we changed one thing in testResult it will be reflected in stoedResults , because arrays are refrences to that place in memory
//but if we ant to create a new array object , we can use slice(to copy arrays)
/*slice is useful for selecting ranges of an array ,
if you want to select two elements at the same time 
*/
// const storedResult = testResult.slice(0, 2); //selects 0 , 1 and 2 is not included
// const storedResult = testResult.slice(-3, -1);

//adding elements to existing array and returning a brand new array
/* concat method allows you to add elements to the end of an array 
concat takes an array or multiple arrays but not individual items , 
and combine these arrays with this array , so it doesn't add these arrays as new nested arrays

*/
// const storedResult = testResult.concat([3.99, 2]);
// console.log(storedResult);
// //inddex of will stop after finding the first matching value
// console.log(testResult.indexOf(1.5));
// console.log(testResult.lastIndexOf(1.5)); //start searching from the right
// /* index of and last index of , both work fine for primitive values but not for refrence values */

const personData = [{ name: "Max" }, { name: "Manuel" }];
// console.log(personData.indexOf({ name: "Manuel" })); //it returns -1 if it couldn't find any entry

/* how to find an object in an array :
find method : it takes a function as an argument , a function that can accept up to 3 arguments
the first argument will be a single object of that array
.. second .. .. .. the index of that single element
the third element  will be the full array

javascript will call that function for you , 
find excutes on the personData array and what it does is it excutes this anonymous function 
which you pass to it on every element in pesronData array

*/

const manuel = personData.find((person, idx, pesrons) => {
  return person.name === "Manuel";
});

manuel.name = "Anna";
console.log(personData);
console.log(manuel);

const maxIndex = personData.findIndex((person, idx, pesrons) => {
  return person.name === "Max";
});
console.log(maxIndex);

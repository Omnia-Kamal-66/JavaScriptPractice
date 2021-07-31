const testResult = [1, 5.3, 1.5, 10.99, -5, 10];
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
const storedResult = testResult.concat([3.99, 2]);
console.log(storedResult);

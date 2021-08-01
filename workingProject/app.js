const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

// const taxAdjustedPrices = [];
// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

/* if you want the index of the element , you don't have it in the for of loop 
instead you can use the for each method , just like find index ,it takes a function 
and that function takes three arguments 
the value it's currently looking at ,
and the index of the element
and the full array

-map method : 
has a job of taking an array , running a function , which has this form on every item in that array
and that function should return a new element for every element in that array

*/
// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjustedPrice: price * (1 + tax) };
//   return priceObj;
// });

// //sort compares strings

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else if (b > a) {
//     return -1;
//   }
// });
// console.log(sortedPrices.reverse());

// // console.log(prices, taxAdjustedPrices);

/* filter will return a brand new array
 */
const filteredArray = prices.filter((price, idx, prices) => {
  return price > 6;
});
console.log(filteredArray);

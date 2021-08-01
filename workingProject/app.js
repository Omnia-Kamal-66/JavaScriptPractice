const prices = [10.99, 5.99, 3.99, 6.59];

let sum = 0;
prices.forEach((price) => {
  sum += price;
});
console.log(sum);

//or

const sum1 = prices.reduce((prevValue, curValue) => {
  return prevValue + curValue;
}, 0);
console.log(sum1);

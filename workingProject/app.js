//pure function

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 5));
console.log(add(12, 15));

//factory function

//why it calls a closure ? : because eery function closes over the surrounding environment which means it registers the surrounding environment
//and the variables registered there and it memorizes the values of these variabales
let multipliier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multipliier);
    return amount * tax * multipliier;
  }
  return calculateTax;
}
const calculatedVatAmount = createTaxCalculator(0.19);
const calculatedIncomeTaxAmount = createTaxCalculator(0.25);

multipliier = 1.2;

console.log(calculatedVatAmount(100));
console.log(calculatedIncomeTaxAmount(200));

let userName = "Max";

function greetUser() {
  //let name = "Anna";
  console.log("hi " + name);
}
let name = "Maximillian";
userName = "Omnia";
greetUser();

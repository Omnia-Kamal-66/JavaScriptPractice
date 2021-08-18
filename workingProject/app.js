const customers = ["Max", "Manuel", "Anna"];
const activeCutomers = ["Max", "Manuel"];

const inactiveCustomers = _.difference(customers, activeCutomers);
console.log(inactiveCustomers);

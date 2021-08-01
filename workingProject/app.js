//array destructuring
const nameData = ["Omnia", "Kamal", "Mrs", 25];
//instead of
// const fName= nameData[0];
// const lName = nameData[1];
//we do

const [fName, lName, ...otherInfo] = nameData;
console.log(fName);
console.log(lName);
console.log(otherInfo);

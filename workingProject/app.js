const persons = [
  { name: "Omnia", age: 25 },
  { name: "Ahmed", age: 29 },
];

//this will be reflected in the copied persons array , because objects are refrence values
// const copiedPersons = [...persons];

//to avoid copying the refrence values of objects while using spread operator is to use map , and map returns an array so there is no nedd for the spread operator

const copiedPersons = persons.map((person) => ({
  name: person.name,
  age: person.age,
}));

persons.push({ name: "Aya", age: 27 });
persons[0].age = 26;

console.log(copiedPersons);

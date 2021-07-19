const startGameBtn = document.getElementById("start-game-btn");

//function expression
const start = function () {
  console.log("Game is starting....");
};

//a function that is stored inside of an object is called a method
// const person = {
//   greet: function greet() {
//     console.log("Hello There!");
//   },
// };
// person.greet();

startGameBtn.addEventListener("click", start);

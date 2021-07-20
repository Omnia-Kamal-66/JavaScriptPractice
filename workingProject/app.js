const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK} , ${PAPER} , ${SCISSORS}`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`invalid choice! we chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

//arrow function is an anonymous function that can't have any name
//if you omit the curly braces of the arrow function you should omi the return keyword

const getWinner = (cChoice, pChoice) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting....");
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerSelection);
  let message = `You Picked ${playerSelection} , computer picked ${computerChoice} , therefor you`;
  if (winner === RESULT_DRAW) {
    message = message + `had a draw`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + `won`;
  } else if (winner === RESULT_COMPUTER_WINS) {
    message = message + `lost`;
  }
  alert(message);
  gameIsRunning = false;
});

//not related to game
/*the sum function shouldn't return the sum , but instead it should excute a function which we pass to it
which then gets the sum as an argument
it's now our job to make sure that when we call sumup , we provide this function
*/
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum); //this argument will be appended as the last argument in your function
};
//the arguments keyword can only be used with functions that have names , it can't be used with arrow function

// const subtractUp = function (resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     //don't use that , use rest operator
//     sum -= num;
//   }
//   resultHandler(sum);
// };
/* i can expect to get the result as an argument to this function , because this will 
be the function i pass to sumUp in the end as a first argument */

/* bind method , create a new refrence at a function which
it returns to you , which will be preconfigured regarding the arguments 
it recieves
with bind you can create a function which is not immediately excuted
which is prepared for a fuuture excution where certain values for certain parameters 
which already known at this point of time are already set

bint takes atleat two arguments
if you bind or set your own arguments , these will always come first and then other arguments
*/
const showResult = (messageText, result) => {
  alert(messageText + "  " + result);
};
combine(
  showResult.bind(this, "the result after adding all numbers is "),
  "ADD",
  1,
  3,
  4
);
combine(
  showResult.bind(this, "the result after subtracting all numbers is "),
  "SUBTRACT",
  8,
  4
);

//module 6 is done

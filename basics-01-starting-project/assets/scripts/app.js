const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
//parseint takes anystring and converts it into a number
//we defined the calcDescription before the currentResult is changed because we want the previous value before doing the calculation
//we don't wanna repeat any code ,so we can take the userinput value and assign it to a const and use it in our code
//we also can create a function that takes the input value and return it to use it in your code

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; //operator is dynamic content
  outputResult(currentResult, calcDescription); //from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
/*
we created this function to avoid code repetition
*/
function calculateResult(calculationType) {
  /*
the next if statement is created to prevent our code from breaking
and giving false results 
as if anyone entered any other value in the calculation type variable 
we make sure that we exit our function
if there is no condition met , there is no point in continuing with this function
*/

  const enteredNumber = getUserNumberInput();

  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    !enteredNumber //to prevent dividing by zero
  ) {
    return;
  }

  const initialResult = currentResult; //the result value before calculation to save the previous value to use it to create the description
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber); //this is more dynamic and there is no hardcoded values
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

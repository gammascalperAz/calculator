// A calculator will need 4 parts, display value, firstOperand, secondOperand and operator


// displayValue holds the string that represents the input or the result of an operation

// firstOperand will store the first operand for any expression. now null.

// operator key will store the operator for an expression. now null.

// waitingForSecondOperand is a way to check if both the first operhand and the operator have been inputted. If true , the next numbers entered will be the second operand.

const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  // grabbing with class of `calculator-screen`
  const display = document.querySelector('.calculator-screen');
  // changing with the contents of `displayValue`
  display.value = calculator.displayValue;
}

updateDisplay();





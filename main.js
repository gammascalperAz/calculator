

calculator = {

  input: document.querySelectorAll(".input"),  
  numberButtons: document.querySelectorAll("num"),  
  operatorButtons: document.querySelectorAll("operator"), 
  equalsButton: document.querySelector("equal-sign"),
  deleteButton: document.querySelector("all-clear"),
  previousOperand: document.querySelector("previousoperand"),
  currentOperand: document.querySelector("currentoperand"),
  eventCalculator: document.querySelector(".calculator").addEventListener("click", (event) => {
  const calcButton = event.target;
  switch (calcButton.className) {
    case "num":
      input.innerHTML += calcButton.innerHTML;
      currCalculation.push(calcButton.innerHTML);
      break;
    case "all-clear":
      input.innerHTML = "";
      currCalculation.push(calcButton.innerHTML);
      break;
    case "operator":
      input.innerHTML += calcButton.innerHTML;
      currCalculation.push(calcButton.innerHTML);
      break; 
    case "equal-sign":
      input.innerHTML = calcButton.innerHTML;
      currCalculation.push(calcButton.innerHTML);

        

  }
}
)

}

  

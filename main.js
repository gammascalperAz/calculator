





// variables

const input = document.querySelector("#input");
let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let equals = document.getElementById("equal-sign");
const clear = document.getElementById("all-clear");

let firstNumber = document.querySelector("firstNumber");
let secondNumber = document.querySelector("secondNumber");
let symbol = document.querySelectorAll(".operator");
let result;

// array for calculation
let calcArr = [];

// cycling through  numbers and displaying result
numbers.forEach(number => {
  number.addEventListener("click", event => {
    if (input.innerText === "+") {
      input.innerText = "";
    } else if (input.innerText === "-") {
      input.innerText = "";
    } else if (input.innerText === "*") {
      input.innerText = "";
    } else if (input.innerText === "/") {
      input.innerText = "";

    }
    input.innerText += number.innerHTML;
    
  });  
});

operators.forEach(operator => {
  operator.addEventListener("click", event => {
    calcArr.push(input.innerText);
    input.innerText = operator.innerHTML;
    calcArr.push(operator.innerHTML);
    console.log(calcArr);

    
  });
});


equals.addEventListener("click", event => {
  console.log(input.innerText);
  calcArr.push(input.innerText);
  input.innerText = equals.innerHTML;
  calcArr.push(equals.innerHTML);
  let total = 0;
  switch (calcArr[1]) {
    case "+":
      total = Number(calcArr[0]) + Number(calcArr[2]);
      break;
    case "-":
      total = Number(calcArr[0]) - Number(calcArr[2]);
      break;
    case "/":
      total = Number(calcArr[0]) / Number(calcArr[2]);
      break;
    case "*":
      total = Number(calcArr[0]) * Number(calcArr[2]);
      break;  
      
  
  }
  
  input.innerText = total;    
 
});





  
  











  

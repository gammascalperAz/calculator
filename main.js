
const input = document.querySelector("#input");
let numbers = document.querySelectorAll(".num");
let operator = document.querySelectorAll(".operator");
let equals = document.querySelector(".equal-sign");
const clear = document.getElementById(".all-clear");

let firstNumber = document.querySelector("firstNumber");
let secondNumber = document.querySelector("secondNumber");
let symbol = document.querySelectorAll(".operator");
let result;


numbers.forEach(item => {
  item.addEventListener("click", event => {
    input.innerHTML += item.innerHTML;
    firstNumber = input.innerHTML;
    console.log(firstNumber);
  })  
})

operator.forEach(item => {
  item.addEventListener("click", event => {
    
    input.innerHTML =" ";
    symbol = input.innerHTML;
   
    console.log(operator);
    

    
  
   
    

  })
})


equals.addEventListener("click", event => {
  secondNumber = input.innerHTML;
  console.log(secondNumber);
 
})



function calculate( firstNumber, secondNumber, operator) {
  if (operator === '+') {
    return firstNumber + secondNumber;
  } else if (operator === '-') {
    return firstNumber - secondNumber;
  } else if (operator === '*') {
    return firstNumber * secondNumber;
  } else if (operator === '/') {
    return firstNumber / secondNumber;
  }
  console.log(calculate);
  
}




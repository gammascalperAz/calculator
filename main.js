// use an array to work with the numbers. that is where the numbers are structured and workable.



// array for calculation (holding stuff together)
let theArr = [];

// variables (grabbing stuff from html)

const input = document.querySelector("#input");
let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let equals = document.getElementById("equal-sign");
const clear = document.getElementById("all-clear");

let firstNumber = document.querySelector("firstNumber");
let secondNumber = document.querySelector("secondNumber");
let symbol = document.querySelectorAll(".operator");
let result;



// cycling through  numbers and displaying result attaching the symobol of operator 
numbers.forEach(number => {
  number.addEventListener("click", event => {
    if (input.innerHTML === "+") {
      input.innerHTML = "";
    } else if (input.innerHTML === "-") {
      input.innerHTML = "";
    } else if (input.innerHTML === "*") {
      input.innerHTML = "";
    } else if (input.innerHTML === "/") {
      input.innerHTML = "";
      console.log(number)

    }
    input.innerHTML += number.innerHTML;
    
  });  
});
// cycling through the operators push the numbers in theArr. pushes both firstnumber and operator
// into array.

operators.forEach(operator => {
  operator.addEventListener("click", event => {
    theArr.push(input.innerHTML);
    input.innerHTML = operator.innerHTML;
    theArr.push(operator.innerHTML);
    console.log(theArr);

    
  });
});

// equals button, performs based on theArr[1], math happens here, adding position 0 and 2 in the array, using the switch (based on the 1 position in the array. 


equals.addEventListener("click", event => {
  console.log(input.innerHTML);
  theArr.push(input.innerHTML);
  input.innerHTML = equals.innerHTML;
  let total = 0;
  switch (theArr[1]) {
    case "+":
      total = Number(theArr[0]) + Number(theArr[2]);
      break;
    case "-":
      total = Number(theArr[0]) - Number(theArr[2]);
      break;
    case "/":
      total = Number(theArr[0]) / Number(theArr[2]);
      break;
    case "*":
      total = Number(theArr[0]) * Number(theArr[2]);
      break;  
      
  
  }
  console.log(theArr);
  input.innerHTML = total;    
 
});



  
  











  

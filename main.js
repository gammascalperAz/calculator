
// const buttonSeven = document.getElementById("button7");


// const displayScreen = document.getElementById("calculator-screen");

// buttonSeven.addEventListener("click", (event) => {
//   displayScreen.innerHTML += "7";
  

// })




// const enterNumber = document.getElementsByClassName("buttonNumers");

// const displayScreen = document.getElementById("calculator-scren");

// enterNumber.addEventListener("click", (event) => {
//      displayScreen.innerHTML = "values";
    
  
//    })



calculator = {
  buttons: document.querySelectorAll("button"), //Calc Buttons
  input: document.querySelectorAll(".input"), //Node List
  keys: document.querySelectorAll("button"),
  eventCalculator: document.querySelector(".calculator").addEventListener("click", (event)=> {
    const calcButton = event.target;
    // switch (calcButton.className) {
    //   case "num":
        input.innerHTML += calcButton.innerHTML;
        // currCalculation.push(calcButton.innerHTML);
        // break;
      // case "op":
      //   input.innerHTML = "";
      //   currCalculation.push(calcButton.innerHTML);
      //   break;  

    

  })
}
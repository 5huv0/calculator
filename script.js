function updateInput(number) {
    document.getElementById("input-display").value += number;
  } // This is to show on display

  function updateInput(value) {
    
    let currentInput = document.getElementById("input-display").value;
  
    
    currentInput += value;
  
    document.getElementById("input-display").value = currentInput;
  } // This is to input numbers multiple time

  function add() {
    let input = document.getElementById("input-display").value;
    input += "+";
    document.getElementById("input-display").value = input;
}

function subtract() {
    let input = document.getElementById("input-display").value;
    input += "-";
    document.getElementById("input-display").value = input;
}

function multiply() {
    let input = document.getElementById("input-display").value;
    input += "x";
    document.getElementById("input-display").value = input;
}

function divide() {
    let input = document.getElementById("input-display").value;
    input += "÷";
    document.getElementById("input-display").value = input;
}

function dot(){
    let input = document.getElementById("input-display").value;
    input += ".";
    document.getElementById("input-display").value = input;
} // These are for signs +,-,x,/,.


let firstNumber = ""; // Variable to store the first number
let operation = ""; // Variable to store the operation (+, -, *, /) 


function clearInput() {
    document.getElementById("input-display").value = "";
    firstNumber = "";
    operation = "";
} // This is for clear button 


 





function updateInput(number) {
    document.getElementById("input-display").value += number;
  } // This is to show on display

  function updateInput(value) {
    
    let currentInput = document.getElementById("input-display").value;
  
    
    currentInput += value;
  
    document.getElementById("input-display").value = currentInput;
  } // This is to add numbers multiple time

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
    input += "/";
    document.getElementById("input-display").value = input;
} // These are for signs


let firstNumber = ""; // Variable to store the first number
let operation = ""; // Variable to store the operation (+, -, *, /)

function addToInput(value) {
    document.getElementById("input-display").value += value;
}

function clearInput() {
    document.getElementById("input-display").value = "";
    firstNumber = "";
    operation = "";
}

function add() {
    firstNumber = document.getElementById("input-display").value;
    operation = "+";
    addToInput("+");
}

function equals() {
    let secondNumber = document.getElementById("input-display").value.split(operation)[1];
    let result;

    switch (operation) {
        case "+":
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        // Add cases for other operations if needed
    }

    document.getElementById("input-display").value = result;
} // This is for adding values



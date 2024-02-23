function updateInput(number) {
    document.getElementById("input-display").value += number;
  } // This is to show on display

  function updateInput(value) {
    
    let currentInput = document.getElementById("input-display").value;
  
    
    currentInput += value;
  
    document.getElementById("input-display").value = currentInput;
  } // This is to add multiple time

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


// function add() {
//     let input = document.getElementById("input-display").value;
    
//     // Split the input string by the '+' symbol to extract the two numbers
//     let numbers = input.split('+');

//     // Convert the extracted numbers from strings to actual numbers
//     let num1 = parseFloat(numbers[0]);
//     let num2 = parseFloat(numbers[1]);

//     // Perform the addition operation
//     let result = num1 + num2;

//     // Update the input field with the result
//     document.getElementById("input-display").value = result;
// } //This is for adding values


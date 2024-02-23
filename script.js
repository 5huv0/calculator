// function one(){
//   console.log(1); 
// }


// function two(){
//     console.log(2);
// }


// function three(){
//     console.log(3);
// }


// function four(){
//     console.log(4);
// }


// function five(){
//     console.log(5);
// }


// function six(){
//     console.log(6);
// }


// function seven(){
//     console.log(7);
// }


// function eight(){
//     console.log(8);
// }


// function nine(){
//     console.log(9);
// }


// function zero(){
//     console.log(0);
// }


function add(){
    let temp = "";
    console.log("+");
}

function substract(){
    console.log("-");
}

function multiple(){
    console.log("*");
}

function divide(){
    console.log("/");
}

function dot(){
    console.log(".");
}

// function display(){
    
// }

// function calculate(){

// }

function clearDisplay(){
    console.log(" ");
}

// function add(){

// }

// function substract(){

// }

// function multiple(){

// }

// function divide(){

// }

// function store(){

// }

function updateInput(number) {
    document.getElementById("input-display").value += number;
  }

  function updateInput(value) {
    
    let currentInput = document.getElementById("input-display").value;
  
    
    currentInput += value;
  
    document.getElementById("input-display").value = currentInput;
  }

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
}

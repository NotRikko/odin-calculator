function add() {
    resultCalc = x+y
}
function subtract (){
    resultCalc = x-y
}
function multiply() {
    resultCalc = x*y
}
function divide() {
    resultCalc = x/y
}

const screen = document.querySelector("#calculatorScreen");
let x;
let y;
let op;
let resultCalc;
let inputValues = screen.textContent;
const opButtons = document.querySelectorAll (".opButton");

function calculate() {
    let newArray = screen.textContent.split(/([*+-/%])/)
    console.log(newArray);
    x = newArray[0];
    x = parseInt(x);
    op = newArray [1];
    y = newArray [2];
    y = parseInt(y);
    switch (op) {
        case "+" :
            add();
            break;
        case "-" :
            subtract();
            break;
        case "*" :
            multiply();
            break;
        case "/" :
            divide();
            break;
    }
}

let inputButtons = document.querySelectorAll(".calcButton");
let clearButton = document.querySelector("#Clear");
let calculateButton = document.querySelector("#solve");
inputButtons.forEach(input => input.addEventListener
    ("click", function screenInput(){
        if (input === clearButton) {
            screen.textContent = "" 
        }
        else if (input === calculateButton) {
            calculate();  
            console.log(resultCalc)  
            screen.textContent = resultCalc;        
        }   
        else {
            screen.textContent += input.textContent
        } 
    })
);




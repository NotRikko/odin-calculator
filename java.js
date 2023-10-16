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
function remainder() {
    resultCalc = x%y;
}

const screen = document.querySelector("#calculatorScreen");
let x;
let y;
let op;
let resultCalc;
let inputValues = screen.textContent;
const opButtons = document.querySelectorAll (".opButton");
const opButtonsArray = Array.from(opButtons);
function calculate() {
let newArray = screen.textContent.split(/([-+*\/%])/)
    console.log(newArray);
    x = newArray[0];
    x = parseFloat(x);
    op = newArray [1];
    y = newArray [2];
    y = parseFloat(y);
    switch (op) {
        case "+" :
            add();
            x = "";
            y = "";
            op = "";
            break;
        case "-" :
            subtract();
            x = "";
            y = "";
            op = "";
            break;
        case "*" :
            multiply();
            x = "";
            y = "";
            op = "";
            break;
        case "%" :
            remainder();
            x = "";
            y = "";
            op = "";
            break;
        case "/" :
            if (y == 0) {
                return  resultCalc = "Nice try"
                x = "";
                y = "";
                op = "";
            }
            else {
            divide();
            x = "";
            y = "";
            op = "";
            }
            break;
    }
}



let inputButtons = document.querySelectorAll(".calcButton");
let clearButton = document.querySelector("#Clear");
let calculateButton = document.querySelector("#solve");
let decimalButton = document.querySelector(".decimal");
inputButtons.forEach(input => input.addEventListener
    ("click", function screenInput(){
        if (input === clearButton) {
            screen.textContent = "" 
        }
        else if (input === calculateButton) {
            calculate();  
            console.log(resultCalc)  ;
            screen.textContent = resultCalc;   
        }   
        else if (opButtonsArray.includes(input)) {
            let operations = /[+\-*/]/;
            if (operations.test(screen.textContent)) {
                calculate();
                screen.textContent = resultCalc;    
                screen.textContent += input.textContent
            }
            else {
                screen.textContent += input.textContent
            }
            
        }
        else if (input == decimalButton) {
            if (screen.textContent.includes(".")) {
            return
            }
            else screen.textContent +=input.textContent
        }
        else {
            screen.textContent += input.textContent
        } 
    })
);




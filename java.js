const screen = document.querySelector("#calculatorScreen");
let inputButtons = document.querySelectorAll(".calcButton");
let clearButton = document.querySelector("#Clear");
inputButtons.forEach(input => input.addEventListener(
    "click", () => (input === clearButton) ? screen.textContent = "" :screen.textContent += input.textContent
));

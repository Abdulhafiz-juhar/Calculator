let firstNum, operator, secondNum;

function add(a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(fNum,op,sNum) {
    return  (op === '+') ? add(fNum,sNum) :
            (op === '-') ? substract(fNum,sNum) :
            (op === '*') ? multiply(fNum,sNum) :
            (op === '/') ? divide(fNum,sNum) :
            null;
}

const display = document.querySelector('.display');
display.textContent = '';

let clicked = [];
let result = 0;
function saveDisplay () {
    clicked.push(this.textContent);
    // if(clicked.length >= 2) {
    //     if(isNaN(parseInt(clicked[clicked.length-1])) === isNaN(parseInt(clicked[clicked.length-2]))) {
    //         let combiner = clicked.slice(clicked.length-2);
    //         clicked.splice(clicked.length-2,2);
    //         clicked.push(combiner);
    //     }
    // }
    if(clicked.length >= 3) {
        result = operate(parseInt(clicked[0]),clicked[1],parseInt(clicked[2]));
        clicked[0] = result;
        clicked.splice(1,2);
    }
        display.textContent = clicked[0];
    
}

const buttons = document.querySelectorAll('.buttonOutput');
buttons.forEach(button => {
    button.addEventListener('click', saveDisplay)
})
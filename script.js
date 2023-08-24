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

let display = document.querySelector('.display');
display.style.innerHtml = 'hello';
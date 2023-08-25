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

function operate(fNum=0,op,sNum=0) {
    return  (op === '+') ? add(fNum,sNum) :
            (op === '-') ? substract(fNum,sNum) :
            (op === '*') ? multiply(fNum,sNum) :
            (op === '/') ? divide(fNum,sNum) :
            null;
}

const display = document.querySelector('.display');


let clicked = [];
let result = 0;
function saveDisplay () {
    display.textContent = '';

    clicked.push(this.textContent);

// For concating consequetive numbers in array if multiple digit
// is entered
    if(clicked.length >= 2) {
        if(isNaN(parseInt(clicked[clicked.length-1])) === isNaN(parseInt(clicked[clicked.length-2]))) {
            if(!isNaN(parseInt(clicked[clicked.length-1]))) {
                let combiner = clicked.slice(clicked.length-2).join('');
                clicked.splice(clicked.length-2,2);
                clicked.push(combiner);

                console.log('combiner');
                console.log(combiner);
                console.log('combiner');
            } else {
                clicked[clicked.length-2] = clicked[clicked.length-1];
                clicked.pop();
            }
        }
    }

// perform  math operation once the required elements are available
        if(clicked.length >= 4 || (clicked.length >= 3 && clicked[clicked.length-1] === '=')) {
            result = operate(parseInt(clicked[0]),clicked[1],parseInt(clicked[2]));
            clicked[0] = result;
            if(clicked[clicked.length-1]=== '=') {
                clicked.splice(1,3);
            } else {
                clicked.splice(1,2);
            }
        }

        for (click of clicked) {
            display.textContent += `${click} `;
        }
    console.log(clicked);
}

function reset() {
    clicked = [];
    result = 0;
    display.textContent = '';
}

const buttons = document.querySelectorAll('.buttonOutput');
buttons.forEach(button => {
    button.addEventListener('click', saveDisplay)
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', reset);
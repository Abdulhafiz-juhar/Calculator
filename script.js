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
let clearResult = false;

function reset() {
    clicked = [];
    result = 0;
    display.textContent = '';
}

function saveDisplay () {

// check if new calculation is started after result
    if(clearResult) {
        if(!isNaN(parseInt(this.textContent))) {
            reset();
        }
        clearResult = false;
    }

    display.textContent = '';
    clicked.push(this.textContent);

// 0 before number checker
    if(clicked.length >=2) {
        if(clicked[0] === '0' && !isNaN(parseInt(clicked[1]))) {
            clicked[0] = clicked[1];
            clicked.pop();
        }

        if(clicked[2] === '0' && !isNaN(parseInt(clicked[3]))) {
            clicked[2] = clicked[3];
            clicked.pop();
        }
    }    


// For concating consequetive numbers in array if multiple digit
// is entered
    if(clicked.length >= 2) {
        if(!isNaN(parseInt(clicked[clicked.length-1])) === !isNaN(parseInt(clicked[clicked.length-2])) || (!isNaN(parseInt(clicked[clicked.length-2])) && clicked[clicked.length-1] === '.')) {
            if(!isNaN(parseInt(clicked[clicked.length-1])) || clicked[clicked.length-1] === '.') {
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

//check if '=' is entered just after one number
    if(clicked.length >= 2 && clicked[1] === '=') {
        clicked.pop();
    }

// perform  math operation once the required elements are available
        if(clicked.length >= 4 || (clicked.length >= 3 && clicked[clicked.length-1] === '=')) {
                result = operate(Number(clicked[0]),clicked[1],Number(clicked[2]));
            //check if result has more than one decimal
            if (Math.round(result * 100) % 100 === 0) {
                result = Math.round(result);
              } else {
                result = Math.round(result * 100) / 100;
              }

            clicked[0] = result;
            if(clicked[clicked.length-1]=== '=') {
                clicked.splice(1,3);
                // track to clear result when new number is entered after result
                clearResult = true;
            } else {
                clicked.splice(1,2);
            }
        }

        if(!isNaN(clicked[0])) {
            for (click of clicked) {
                display.textContent += `${click} `;
            }
        } else {
            clicked.pop();
        }
            
    console.log(clicked);
}

const buttons = document.querySelectorAll('.buttonOutput');
buttons.forEach(button => {
    button.addEventListener('click', saveDisplay)
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', reset);
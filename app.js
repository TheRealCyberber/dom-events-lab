/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let firstValue = null;
let secondValue = null;
let operation = null;

/*------------------------ Cached Element References ------------------------*/

let operationButtons = document.querySelectorAll('.operation');
let numbers = document.querySelectorAll('.number');

let addButton = document.querySelector('#add');
let subtractButton = document.querySelector('#subtract');
let multiplyButton = document.querySelector('#multiply');
let divideButton = document.querySelector('#divide');

let equalsButton = document.querySelector('#equals');
let clearButton = document.querySelector('#clear');

let totalDisplay = document.querySelector('.display');
totalDisplay.innerText = 0;



/*-------------------------------- Functions --------------------------------*/
const add = () => {
    return firstValue + secondValue;
};

const subtract = () => {
    return firstValue - secondValue;
};

const multiply = () => {
    return firstValue * secondValue;
};

const divide = () => {
    return firstValue / secondValue;
};

const renderCalculation = () => {
    let total;
    if (operation === 'add') {
        total = add();
    }
    if (operation === 'subtract') {
        total = subtract();
    }
    if (operation === 'multiply') {
        total = multiply();
    }
    if (operation === 'divide') {
        total = divide();
    }

    totalDisplay.innerText = total;
}

const handleOperatorBtn = (event) => {
    firstValue = parseInt(totalDisplay.innerText);
    operation = event.target.id;
    totalDisplay.innerText = 0;
}

const handleEqualBtn = () => {
    secondValue = parseInt(totalDisplay.innerText);
    renderCalculation();
}

const clear = () => {
    totalDisplay.innerText = 0;
    firstValue = null;
    secondValue = null;
}


/*----------------------------- Event Listeners -----------------------------*/

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        if (totalDisplay.innerText === '0') {
            totalDisplay.innerText = event.target.innerText;
          } else {
            totalDisplay.innerText += event.target.innerText;
          }
        });
    });

operationButtons.forEach((operation) => {
    operation.addEventListener('click', handleOperatorBtn);
});

equalsButton.addEventListener('click', handleEqualBtn);
clearButton.addEventListener('click', clear);


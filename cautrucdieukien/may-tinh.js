let display = document.getElementById("display");

let isOperatorClicked = false;
let isEqualClicked = false;

let operator = '';
let firstOperand;
let secondOperand;

function reset() {
    isOperatorClicked = false;
    isEqualClicked = false;

    operator = '';
    firstOperand = undefined;
    secondOperand = undefined;
    display.value = "";
}

function clickNumber(number) {
    if (isOperatorClicked == true) {
        firstOperand = display.value;
        console.log(firstOperand);

        display.value = number;
        isOperatorClicked = false;

    } else {
        display.value += number;
    }
}

function clickOperator( operatorValue ) {
    isOperatorClicked = true;
    operator = operatorValue;
    isEqualClicked = false;
}

function clickEqual() {

    if (isEqualClicked) {
        firstOperand = parseInt(display.value);
    } else {
        firstOperand = parseInt(firstOperand);
        secondOperand = parseInt(display.value);
    }

    console.log('clickEqual()', firstOperand, secondOperand);

    let result;

    if (operator === '+') {
        result = firstOperand + secondOperand;
    } else if (operator === '-') {
        result = firstOperand - secondOperand;
    }

    display.value = result;
    isEqualClicked = true;
}
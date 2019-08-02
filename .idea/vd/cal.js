let isOperatorClick= false;
let isEqualClick=false;
let firstOperand;
let secondOperand;



function ClickNumber(Number) {
    if(isOperatorClick==true)
    {
        firstOperand=display.value;
        display.value=Number;
        isOperatorClick=false;
    }
    else
    {
        display.value+=Number;
    }

}
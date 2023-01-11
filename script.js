// Object Values

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

// Display
const updatedDisplay = () => {
    const display = document.querySelector('.screen');
    display.value = calculator.displayValue;
};

updatedDisplay();

// Handle Key Press

const keys = document.querySelector('.key');
keys.addEventListener('click', (event) => {
    const { target } = event:
    if (!target.matches('button')) {
        return;
    }

    if(target.classList.contains('operator')) {
        handleOperator(target.value)
        updatedDisplay()
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updatedDisplay()
        return;
    }
    if (target.classList.contains('decimal')) {
        resetCalculator()
        updatedDisplay()
        return;
    }
        inputDigit(target.value);
        updatedDisplay();
});

//Input Digit

const inputDigit = (digit) {
    const { displayValue, waitingForSeconsOperand } = calculator;

    if(waitingForSeconsOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperang = false;
    } else {
        calculator.displayValue = 
        displayValue === "0" ? digit: displayValue  + digit
    }
    }



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
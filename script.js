let display = document.getElementById('display');
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
    display.value += number;
}

function setOperation(operator) {
    if (currentOperation && display.value) {
        calculate();
    }
    firstOperand = parseFloat(display.value);
    currentOperation = operator;
    display.value = '';
}

function calculate() {
    if (firstOperand === null || currentOperation === null || display.value === '') return;
    secondOperand = parseFloat(display.value);
    
    switch (currentOperation) {
        case '+':
            display.value = firstOperand + secondOperand;
            break;
        case '-':
            display.value = firstOperand - secondOperand;
            break;
        case '*':
            display.value = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand !== 0) {
                display.value = firstOperand / secondOperand;
            } else {
                display.value = 'Error';
            }
            break;
    }
    firstOperand = null;
    currentOperation = null;
}

function clearDisplay() {
    display.value = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        document.getElementById('bmiResult').innerText = `Your BMI is: ${bmi.toFixed(2)}`;
    } else {
        document.getElementById('bmiResult').innerText = 'Please enter valid weight and height.';
    }
}

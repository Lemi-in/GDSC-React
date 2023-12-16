// Initialize the running total, buffer, and previousOperator variables
let runningTotal = 0;
let buffer = "0";
let previousOperator;

// Select the screen element to display the calculator input and output
const screen = document.querySelector('.screen');

// Function to handle button clicks
function buttonClick(value) {
    // Check if the value is a number or a symbol
    if (isNaN(value)) {
        // Handle symbols (e.g., '+', '−', '×', '÷', '=', 'C', '←')
        handlesymbol(value);
    } else {
        // Handle numbers
        handleNumber(value);
    }
    // Update the screen with the current buffer value
    screen.innerText = buffer;
}

// Function to handle symbols
function handlesymbol(symbol) {
    switch (symbol) {
        case 'C':
            // Clear the buffer and running total
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            // Perform the calculation and update the buffer and running total
            if (previousOperator == null) {
                return; // If no previous operator, do nothing
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            // Remove the last character from the buffer
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            // Handle math operations
            handleMath(symbol);
            break;
    }
}

// Function to handle math operations
function handleMath(symbol) {
    // If the buffer is '0', do nothing
    if (buffer === '0') {
        return;
    }
    const intBuffer = parseInt(buffer);

    // If the running total is 0, set it to the current buffer value,
    // otherwise, perform the previous operation and update the buffer
    if (runningTotal == 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    // Set the current symbol as the previous operator and reset the buffer
    previousOperator = symbol;
    buffer = '0';
}

// Function to perform the flush operation based on the previous operator
function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '−') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else if (previousOperator === '÷') {
        runningTotal /= intBuffer;
    }
}

// Function to handle number input
function handleNumber(numberString) {
    // If the buffer is '0', replace it with the current number,
    // otherwise, append the number to the buffer
    if (buffer === '0') {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

// Initialization function
function init() {
    // Add a click event listener to the calculator buttons
    document.querySelector('.calc-buttons')
        .addEventListener('click', function (event) {
            // Call the buttonClick function with the clicked button's inner text
            buttonClick(event.target.innerText);
        });
}

// Call the initialization function
init();

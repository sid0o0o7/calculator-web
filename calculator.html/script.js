let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value); // Evaluate the current expression
    } catch (error) {
        display.value = "Error"; // Handle invalid input
    }
}

// New function to calculate the square of the current number
function calculateSquare() {
    try {
        let value = parseFloat(display.value); // Get the number as a float
        if (isNaN(value)) {
            display.value = "Error"; // If it's not a number, show error
        } else {
            display.value = Math.pow(value, 2); // Square the number
        }
    } catch (error) {
        display.value = "Error";
    }
}
/* Function to add a character to the equation input field */
function addToEquation(char) {
    document.getElementById("equation").value += char;
}

/* Function to clear the equation input field */
function clearEquation() {
    document.getElementById("equation").value = "";
    document.getElementById("result").value = "";
}

/* Function to calculate the result of the equation */
function calculate() {
    var equation = document.getElementById("equation").value;
    var result = eval(equation);
    document.getElementById("result").value = result;
}
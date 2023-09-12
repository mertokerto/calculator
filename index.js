let display = document.querySelector(".display");
let firstParam = "";
let sign;
let secondParam = "";
let signBool = false;
let result = "";

function add(firstParam, secondParam) {
    result = firstParam + secondParam;
    display.textContent = result;
    firstParam = "";
    secondParam = "";
    sign = "";
    result = "";
    return result;
}

function subtract(firstParam, secondParam) {
    result = firstParam - secondParam;
    display.textContent = result;
    firstParam = "";
    secondParam = "";
    sign = "";
    result = "";
    return result;
}

function multiply(firstParam, secondParam) {
    result = firstParam * secondParam;
    display.textContent = result;
    firstParam = "";
    secondParam = "";
    sign = "";
    result = "";
    return result;
}

function divide(firstParam, secondParam) {
    result = firstParam / secondParam;
    display.textContent = result;
    firstParam = "";
    secondParam = "";
    sign = "";
    result = "";
    return result;
}

function process() {
    switch (sign) {
        case "+":
            add(firstParam, secondParam);
            break;
        case "-":
            subtract(firstParam, secondParam);
            break;
        case "x":
            multiply(firstParam, secondParam);
            break;
        case "/":
            divide(firstParam, secondParam);
            break;
        default:
            break;
    }
}

function signDeclare(signInput) {
    sign = signInput;
    console.log(sign);
}

function addFirstParam(nmb) {
    if (signBool == false) {
        if (firstParam === "") {
            firstParam = nmb;
        } else {
            firstParam += nmb;
        }
    }
    console.log(signBool);
    console.log(firstParam);
    if (signBool == true) {
        if (secondParam === "") {
            secondParam = nmb;
        } else {
            secondParam += nmb;
        }
    }
    console.log(secondParam);
}

function equation() {
    if (signBool == true && firstParam !== "" && secondParam !== "") {
        process();
    }
}

function displayEquation(input) {
    if (display.textContent === "0") {
        display.textContent = input;
    } else if (display.textContent == result) {
        display.textContent = firstParam;
    } else {
        display.textContent += input;
    }
}

function clearDisplay() {
    display.textContent = "0";
    firstParam = "";
    secondParam = "";
    sign = "";
}

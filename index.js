let firstParam;
let sign;
let secondParam;

function add(firstParam, secondParam) {
    return firstParam + secondParam;
}

function subtract(firstParam, secondParam) {
    return firstParam - secondParam;
}

function multiply(firstParam, secondParam) {
    return firstParam * secondParam;
}

function divide(firstParam, secondParam) {
    return firstParam / secondParam;
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

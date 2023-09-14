/* 
Create calculator
Add addition--
Add subtraction--
Add multiplication--
Add division--

Should work in console for now
*/
let firstNumber = '';
let nextNumber = '';
let operator = null;

const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const resetBtn = document.querySelector('#reset');
const equalsBtn = document.querySelector('#equalsBtn');
const display = document.querySelector('.display');

//Number Buttons
numberBtns.forEach((button) =>{
    button.addEventListener('click',() => appendNumber(button.textContent))
})

function appendNumber(number){
    display.textContent += number;
}
//Operator Buttons
operatorBtns.forEach((button) =>{
    button.addEventListener('click',() => setOperator(button.textContent))
})

function setOperator(operator){
    display.textContent += ` ${operator} `;
}
//Get values from display
function getValues(){
    let valueString = display.textContent;
    let valueArray = valueString.split(' ');
    firstNumber = valueArray[0]
    operator = valueArray[1]
    nextNumber = valueArray[2]
}
//Show result
equalsBtn.addEventListener('click',() => operate())

//Clears display only (might need for more dynamic one)
function clearDisplay(){
    display.textContent = '';
}
//Resets to default values and clears display
resetBtn.addEventListener('click', () => resetCalculator())
function resetCalculator(){
    display.textContent = '';
    firstNumber  = '';
    nextNumber = '';
    operator = null;
}

//Does calculations
function operate(){
    getValues();
    a = parseInt(firstNumber);
    b = parseInt(nextNumber);
    oper = operator;

    switch(oper){
        case '+':
        return addition(a, b);
        case '-':
        return subtraction(a, b);
        case '*':
        return multiplication(a, b);
        case '/':
        return division(a, b);
    }

};

//Addition fuction
function addition(a, b){
    display.textContent = a + b;
//    return console.log(sum)
}
//Subtraction function
function subtraction(a, b){
    return a - b;
}
//Multiplication function
function multiplication(a, b){
    return a * b;
}
//Division function
function division(a, b){
    return a / b;
}
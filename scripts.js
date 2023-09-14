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
    button.addEventListener('click',() => {
        if(firstNumber != '' && operator == null){
            resetCalculator();
        }
        appendNumber(button.textContent)
    })
});

function appendNumber(number){
    display.textContent += number;
}
//Operator Buttons
operatorBtns.forEach((button) =>{//sets operator value to button value
    button.addEventListener('click',() => {
        setOperator(button.textContent)
        if(operator != null){
            operate();
            setOperator(button.textContent)
            operator = button.textContent;
        }
        operator = button.textContent;
        
    })
});
    
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
    a = parseFloat(firstNumber);
    b = parseFloat(nextNumber);
    oper = operator;

    switch(oper){
        case '+':
        return firstNumber = addition(a, b),
               nextNumber = '',
               operator = null;
        case '-':
            return firstNumber = subtraction(a, b),
            nextNumber = '',
            operator = null;
        case '*':
            return firstNumber = multiplication(a, b),
            nextNumber = '',
            operator = null;
        case '/':
            return firstNumber = division(a, b),
            nextNumber = '',
            operator = null;
    }
};

//Addition fuction
function addition(a, b){
    result = a + b;
    result = parseFloat (result.toFixed(1));
    display.textContent = result
    return result;
//    return console.log(sum)
}
//Subtraction function
function subtraction(a, b){
    result = a - b;
    result = parseFloat (result.toFixed(1));
    display.textContent = result
    return result;
}
//Multiplication function
function multiplication(a, b){
    result = a * b;
    result = parseFloat (result.toFixed(1));
    display.textContent = result
    return result;
}
//Division function
function division(a, b){
    result = a / b;
    result = parseFloat (result.toFixed(1));
    display.textContent = result
    return result;
}
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
const clearBtn = document.querySelector('#clear');
const display = document.querySelector('.display');

numberBtns.forEach((button) =>{
    button.addEventListener('click',() => appendNumber(button.textContent))
})

function appendNumber(number){
    display.textContent += number;
}

operatorBtns.forEach((button) =>{
    button.addEventListener('click',() => setOperator(button.textContent))
})

function setOperator(operator){
    display.textContent += operator;
}

function clearDisplay(){
    display.textContent = '';
}


function operate(){
    a = firstNumber;
    b = nextNumber;
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
    return a += b;
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
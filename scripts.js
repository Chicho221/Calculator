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
const dotBtn = document.querySelector('.dotBtn');
const backspaceBtn = document.querySelector('.backspace');
const display = document.querySelector('.display');
const secondDisplay = document.querySelector('.second-display');

function updateSecondDisplay(){
    if(operator == null){
        secondDisplay.textContent = `${firstNumber}`;
    }
    secondDisplay.textContent = `${firstNumber} ${operator}`;
}

//Number Buttons
numberBtns.forEach((button) =>{
    button.addEventListener('click',() => {
        if(display.textContent == 'ERROR'){
            resetCalculator();
        } else if(firstNumber != '' && operator == null){
            resetCalculator();
        }
        appendNumber(button.textContent)
    })
});

//Keyboard number support
window.addEventListener('keydown',(event) =>{
    if(!(event.key >= 0)){
    return;
    }else if(display.textContent == 'ERROR'){
        resetCalculator();
    } else if(firstNumber != '' && operator == null){
        resetCalculator();
    }
    appendNumber(event.key)
})

function appendNumber(number){
    display.textContent += number;
}

//Dot Button
let dotBtnState = true;
function resetDotState(){
    dotBtnState = true;
}
dotBtn.addEventListener('click',() =>{
    if(dotBtnState === false){
        return;
    }else if(display.textContent == 'ERROR' || display.textContent == ''){
        return;
    }else {
      dotBtnState = false;
      appendNumber(dotBtn.textContent);  
    }
})
//Keyboard dot support
window.addEventListener('keydown',(event) =>{
    if(!(event.key == '.')){
        return;
    }else {
        if(dotBtnState === false){
            return;
        }else if(display.textContent == 'ERROR' || display.textContent == ''){
            return;
        }else {
          dotBtnState = false;
          appendNumber(dotBtn.textContent);  
        }
    }
})

//Backspace Button
backspaceBtn.addEventListener('click',() =>{ //Works with numbers but has problems with operators.
    cont = display.textContent;
    display.textContent = cont.slice(0,-1);
})
//Keyboard backspace support
window.addEventListener('keydown',(event) =>{
    if(event.key == 'Backspace'){
    cont = display.textContent;
    display.textContent = cont.slice(0,-1);
    }
})

//Operator Buttons
operatorBtns.forEach((button) =>{//sets operator value to button value NOTE:Allows for user to put in multiple operators in textContent. Will be fixed with dynamic one. Hope so :).
    button.addEventListener('click',() => {
        if(secondDisplay.textContent == '' && display.textContent == '' ){
            return;
        }
        if(operator == null){
            operator = button.textContent;
        }
        if(display.textContent == 'ERROR'){
            resetCalculator();
            return;
        }
        if(firstNumber != '' || firstNumber == '0'){
            if(secondDisplay.textContent == ''){
                updateSecondDisplay();
                clearDisplay();
                return;
            }else if(display.textContent == '' && secondDisplay.textContent != ''){
                operator = button.textContent;
                updateSecondDisplay();
                return;
            }
                nextNumber = display.textContent;
            
                operate();
                operator = button.textContent;
                clearDisplay();
                updateSecondDisplay();
                return;   
        }
        firstNumber = display.textContent;
        clearDisplay();
        updateSecondDisplay();
    })
});
//Keyboard operator support
window.addEventListener('keydown',(event) =>{
    if(!(event.key == '+' ||event.key == '-' ||event.key == '*' ||event.key == '/')){
        return;
    }else if(secondDisplay.textContent == '' && display.textContent == '' ){
        return;
    }
    if(operator == null){
        operator = event.key;
    }
    if(display.textContent == 'ERROR'){
        resetCalculator();
        return;
    }
    if(firstNumber != '' || firstNumber == '0'){
        if(secondDisplay.textContent == ''){
            updateSecondDisplay();
            clearDisplay();
            return;
        }else if(display.textContent == '' && secondDisplay.textContent != ''){
            operator = button.textContent;
            updateSecondDisplay();
            return;
        }
            nextNumber = display.textContent;
        
            operate();
            operator = event.key;
            clearDisplay();
            updateSecondDisplay();
            return;   
    }
    firstNumber = display.textContent;
    clearDisplay();
    updateSecondDisplay();
})

function setOperator(operator){
    display.textContent += ` ${operator} `;
}
//Show result
equalsBtn.addEventListener('click',() => operate())

//Clears display only (might need for more dynamic one)
function clearDisplay(){
    resetDotState()
    display.textContent = '';
}
function clearSecondDisplay(){
    resetDotState()
    secondDisplay.textContent = '';
}
//Resets to default values and clears display
resetBtn.addEventListener('click', () => resetCalculator())
function resetCalculator(){
    resetDotState()
    secondDisplay.textContent = '';
    display.textContent = '';
    firstNumber  = '';
    nextNumber = '';
    operator = null;
}

//Does calculations
function operate(){
    if(nextNumber == '' && secondDisplay.textContent != ''){
        nextNumber = display.textContent;
    }
    else if(firstNumber == '' || nextNumber == ''){
        return;
    }
    a = parseFloat(firstNumber);
    b = parseFloat(nextNumber);
    oper = operator;
    clearSecondDisplay()
    
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
    if(b == 0){
        display.textContent = 'ERROR';
        return;
    }
    result = a / b;
    result = parseFloat (result.toFixed(1));
    display.textContent = result
    return result;
}
/* 
Create calculator
Add addition--
Add subtraction--
Add multiplication--
Add division--

Should work in console for now
*/
let firstNumber = 1;
let nextNumber = 1;
let operator;

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
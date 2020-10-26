const readlinesync = require ('readline-sync');
var num1 = parseInt(readlinesync.question('Please enter your first number'));
console.log(num1);
var num2 = parseInt(readlinesync.question('Please enter your second number'));
console.log(num2);
var operation = ['Addition','Subtraction','Multiplication','Division'],
index = readlinesync.keyInSelect(operation, 'Please enter the operation to perform');
console.log(operation[index])

function addition(num1,num2){
    sum = num1 + num2;
    console.log('The result is '+ sum)
} 
function subtraction (num1,num2){
    difference = num1 - num2;
    console.log('The result is'+ difference)
}
function multiplication (num1,num2){
    product = num1 * num2;
    console.log('The result is'+ product)
}
function division (num1,num2){
    quotient = num1 / num2;
    console.log('The result is'+ quotient)
} 
if (operation[index] === 'Addition') {
   addition(num1,num2)

}

if (operation[index]=== 'Subtraction') {
    subtraction(num1,num2)
}

if (operation[index] === 'Multiplication') {
    multiplication(num1,num2)
}  

if (operation[index]=== 'Division') {
    division(num1,num2)
   
}

let firstNumber = ''; //first number of the operation.
let secondNumber = ''; //second number of the operation.
let result = 'ananye';

let operantClicked = false; //to determine the first section of the operation.
let choosenOperation = ''; //changes for each operation button.

const display = document.querySelector('.display');

// Event listener for each number button.
const number = document.querySelectorAll('.number');
console.log(number);
number.forEach(numSelect => numSelect.addEventListener('click', ()=>{
    if (operantClicked == false){
        firstNumber = firstNumber + numSelect.getAttribute('data-id');
        display.innerHTML=firstNumber
    }
    else{
        secondNumber = secondNumber + numSelect.getAttribute('data-id');
        display.innerHTML=secondNumber
    }
}));

// Event listener for each operant button.
const operant = document.querySelectorAll('.process');
operant.forEach(operan => operan.addEventListener('click', ()=>{
    // if the user clicks another operant without clicking equals button, we trigger the click.
    if(operantClicked == true){
        document.getElementById('equals').click();
    }
    operantClicked = true;
    choosenOperation = operan.getAttribute('id');
    console.log(choosenOperation);
}));

// Equal button and defining of all the operations
const equal = document.querySelector('#equals');
equal.addEventListener('click', ()=>{
    if(choosenOperation == 'divide'){
        result = firstNumber / secondNumber;
    }
    else if(choosenOperation == 'multiply'){
        result = firstNumber * secondNumber;
    }
    else if(choosenOperation == 'subtract'){
        result = firstNumber - secondNumber;
    }
    else if(choosenOperation == 'add'){
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
    }

    operantClicked = false; //to avoid any errors when user forget to click operation button after the equal button.
    firstNumber = result.toString();
    secondNumber = '';
    display.innerHTML = firstNumber
})

//Clear button
const clear = document.querySelector('#clear');
clear.addEventListener('click', ()=>{
    display.innerHTML = '0';
    firstNumber = '';
    secondNumber = '';
    operantClicked = false;
    choosenOperation = '';
})


//Delete button
const deleteNum = document.querySelector('#delete');
deleteNum.addEventListener('click', ()=>{
    if(operantClicked == false){
        firstNumber = firstNumber.slice(0,-1);
        display.innerHTML = firstNumber;
    }
    else{
        secondNumber = secondNumber.slice(0,-1);
        display.innerHTML = secondNumber;
    }
})
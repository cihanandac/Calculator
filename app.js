let firstNumber = ''; //first number of the operation.
let secondNumber = ''; //second number of the operation.

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
    operantClicked = true;
    choosenOperation = operan.getAttribute('id');
    console.log(choosenOperation);
}));

// dividing function
function divide(){
    let result = firstNumber / secondNumber;
    console.log(result);
    return result;
}


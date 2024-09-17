// Add in the code from the walk-through and observe the page behaviour.
let first = prompt('Enter a number:');
let second = prompt('Enter another number:');

document.getElementById('firstNumber').innerText = first;
document.querySelector('#secondNumber').innerText = second;


// Do some math. But this time, I will use a function for that.
const addNumbers = function(firstValue, secondValue) {
    let valueOne = parseFloat(firstValue);
    let valueTwo = parseFloat(secondValue);
    return valueOne + valueTwo;
}

// Now, display the answer
document.getElementById('answer').innerText = addNumbers(first, second);

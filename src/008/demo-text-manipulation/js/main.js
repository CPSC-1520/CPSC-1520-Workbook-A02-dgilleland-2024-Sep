// Some global variables that we will re-use frequently
const userInput = document.getElementById('userInput');
const output = document.getElementById('transformedText');
// Show the user input in the output
output.innerText = userInput.value;
// A little prep....
const presetPaddingLength = function() {
    let input = document.getElementById('minLength');
    input.value = userInput.value.length + 5;
}
presetPaddingLength();

// And now for the lesson....
document.getElementById('transformToUpperCase').addEventListener('click', function() {
    let newValue = userInput.value.toUpperCase();
    //             \  string     /
    output.innerText = newValue;
});

// TODO: 1) Write the code to transform the user's input to lower case and display it
//       STUDENT_CODE_HERE

document.querySelector('#transformPadEnd').addEventListener('click', function() {
    // TODO: 2) Modify the code below to use the appropriate user input for padding.
    let currentValue = 'bob';// userInput.value;
    let newValue = currentValue.padEnd(10, '^');
    output.innerText = newValue;
});
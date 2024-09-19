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
let h1Tag = document.querySelector('h1');
console.log(h1Tag); // show the element in the dev tools console
let message = h1Tag.innerText; // Store the text of the <h1> into the variable
console.log(message);
// start by modifying the variable's contents
message = message + ' while the Going\'s Good';
console.log('The new message:', message);

h1Tag.innerText = message;

// Your job is to see if you can change the text of the <h3> tag on the page via JavaScript.

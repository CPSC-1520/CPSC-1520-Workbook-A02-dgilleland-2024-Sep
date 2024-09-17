/*

	Create variables to hold the receiving party's name, disclosing party's name, and the date

	Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

	Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

	Use the skills you have learned up to this point.
*/
let disclosingElements = document.querySelectorAll('.disclosing-party');
console.log(disclosingElements);

let disclosingPartyName = prompt('Enter a name for the disclosing party.');
console.log(disclosingPartyName);

// Gutsy code here - I'm presuming there are two elements from the .querySelectorAll
disclosingElements[0].innerText = disclosingPartyName;
disclosingElements[1].innerText = disclosingPartyName;

let receivingPartyName = prompt('Enter a name for the receiving party.');
document.querySelectorAll('.receiving-party')[0].innerText = receivingPartyName;
document.querySelectorAll('.receiving-party')[1].innerText = receivingPartyName;



console.log('json-demo'); // sanity check

// Let's create a JavaScript object literal
const person = {
    name: 'John Doe',
    age: 25,
    hobbies: ['reading', 'cooking', 'coding'],
    speak: function(name) {
        console.log(`Hello ${name}`);
    }
};
console.log('Normal JavaScript object literal', person);
person.speak('Phil');
// Now, let's convert it to JSON
const personJSON = JSON.stringify(person, null, 2);
console.log('JSON:\n', personJSON);
// Let's convert it back to a JavaScript object
const personObject = JSON.parse(personJSON);
console.log('Back to a JavaScript object:\n', personObject);

// Let's load in some JSON data from the server. It's in a file called 'friends.json'
// We'll use the Fetch API to load it in
let data = []; // We'll store the data here
const url = 'friends.json'; // the relative path to the file I need from the server

// The Fetch API returns a Promise, which is an asynchronous function
// Using the await keyword, I can pause the execution of my code until
// the asynchronous functions are completed.
await fetch(url) // Get the data from some URL (web server that processes the REQUEST)
    // Convert the data to JSON
    .then(response => response.json()) // response is a parameter/variable
    // Do something with the data
    .then(jsonInfo => { // jsonInfo is just a parameter name/variable name
        // I happen to know that the jsonInfo will be an array of objects
        // (because I peeked at the friends.json file before I wrote this code).
        // I'm replacing my empty array with the array of data that I just fetched.
        data = jsonInfo; // I'm storing the data in the array from line 23.
        console.log('Friends data from server', data);
    });
// In the meantime, let's check out
// our data variable
import { createFriendDiv } from "./ui.js"; // TODO: move this to the top of the file

if(data.length == 0) {
    console.error('Data is empty');
} else {
    console.log('Data is not empty');
    // Make info for the friends
    let theInfo = '';
    for(let index = 0; index < data.length; index++) {
        theInfo += createFriendDiv(data[index]);
    }
    document.body.innerHTML += theInfo;
}


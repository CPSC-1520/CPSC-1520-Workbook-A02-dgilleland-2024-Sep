// index.js
/**
 * convertResponse() is a function to process the initial response from a web server.
 * The intention is for this to be in the first `.then()` of the Fetch API.
 * @param {HTTPResponse} response Whatever HTTPResponse object that the web server generated
 * @returns JSONObject
 */
const convertResponse = (response) => {
    console.log('Here is what came back from the web server:', response)
    return response.json();
}
// function(response) {
//     return response.json();
// }
/**
 * processJson() is a function that expects an object with a .type, .setup and .punchline properties.
 * This is built to do the final bit of processing of the Joke API data format.
 * We dump the info to the console and display it on the web page.
 * @param {object} data Some JavaScript object
 */
const processJson = function(data) {
    // And then we'll log the data to console, so we can see it
    console.log('the response was converted to JSON');
    console.log(data);
    document.getElementById('the-joke').innerHTML = `
    <h3>${data.type}</h3>
    <p>${data.setup}</p>
    <blockquote>${data.punchline}</blockquote>
    `
}
const buttonClickHandler = function(evt) {
    // We'll call an API that will give us JSON
    const apiUrl = 'https://official-joke-api.apppppppppspot.com/random_joke';
    fetch(apiUrl)
        .then(convertResponse)
        .then(processJson)
        .catch(err => {
            console.error("My handling of the error:", err);
        });
    console.log('Button was clicked!');
}
// Hook up the button to the click handler
document
  .querySelector('#get-fun')
  .addEventListener('click', buttonClickHandler);

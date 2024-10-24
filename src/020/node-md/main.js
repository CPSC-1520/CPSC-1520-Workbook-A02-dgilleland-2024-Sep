console.log('loaded main.js');

/**
 * 
 * @param {Response} response 
 */
const handleResponse = function(response) {
    console.log(response.status, response.statusText);
    return response.text();
}

const handleMarkdown = function(markdownText) {
    console.log(markdownText);
}

fetch('./content/ReadMe.md')
    .then(handleResponse)
    .then(handleMarkdown);
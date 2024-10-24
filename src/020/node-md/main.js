// It's common practice to import any 3rd-party libraries
// at the top of your script file.
import markdownit from 'markdown-it'
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
    const rawText = `<details>
        <summary>Markdown</summary>
        <pre><code>${markdownText}</code></pre>
    </details>
    <hr />`;
    document.body.innerHTML += rawText;

    // Convert Markdown to HTML
    const md = markdownit()
    const result = md.render(markdownText);
    console.log(result);
    // Append it to the body of my page
    document.body.innerHTML += result;
}

fetch('./content/ReadMe.md')
    .then(handleResponse)
    .then(handleMarkdown);
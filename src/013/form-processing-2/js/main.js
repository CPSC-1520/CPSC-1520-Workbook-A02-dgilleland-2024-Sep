const appendFeedback = function(line) {
    document.querySelector('#feedback').innerText += `\n${line}`;
}

const clearFeedback = function(text) {
    document.querySelector('#feedback').innerText = `${text || ''}`;
}

const appendFeedback = function(line) {
    document.querySelector('#feedback').innerText += `\n${line}`;
}

const clearFeedback = function(text) {
    document.querySelector('#feedback').innerText = `${text || ''}`;
}

document.getElementById('subscribe').addEventListener('submit', function(evt) {
    evt.preventDefault();
    clearFeedback('Processing the subscribe form...');
    let formElements = evt.target.elements;
    /*
    Apply the following validations to the user's input, and display appropriate messages in the id='feedback' element.

    - firstname must be at least 2 characters and cannot have any spaces
    - email must be from an "approved" domain: @nait.ca, @gmail.com or @gov.ab.ca
    - terms must be checked on
     */
    let inputFirstName = formElements.firstname;
    appendFeedback(`firstname input is '${inputFirstName.value}'`);
    let theFirstName = inputFirstName.value;
    if(theFirstName.length < 2) {
        appendFeedback('The first name is too short');
    }
    if(theFirstName.replace(' ', '').length !== theFirstName.length) {
        appendFeedback('Spaces are not allowed in the first name');
    }
    // TODO: What approaches can we take to give feedback that the firstname input is good?

    let email = formElements.email.value; // <!-- I had a bug!
    appendFeedback(`email input is '${email}'`);
    if(email.endsWith('@nait.ca') || email.endsWith('@gmail.com') || email.endsWith('@gov.ab.ca')) {
        appendFeedback('The email is from an approved domain');
    } else {
        appendFeedback('You are not using an approved email address');
    }

    let termsCheckbox = formElements.terms;
    if(termsCheckbox.checked) {
        appendFeedback('Thanks for agreeing to the terms.')
    } else {
        appendFeedback('You must agree to the terms in order to subscribe');
    }
})

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

// Handle the processing of the `assorted` form
document.getElementById('assorted').addEventListener('submit', function(evt) {
    /*Validation will always be situation-specific.
     */
    evt.preventDefault();
    clearFeedback('Processing/Validating the Assorted Inputs form.');
    const formElements = evt.target.elements;

    //  Identify which of the first three inputs were not supplied by the user (date, time, color).
    let message = 'The following form inputs are missing: ';
    if(! formElements.date.value) // Using "truthy" evaluation
        message += 'date ';
    if(! formElements.time.value)
        message += 'time ';
    if(! formElements.color.value)
        message += 'color ';
    appendFeedback(message);

    // The selected color cannot be black or white.
    appendFeedback(`The selected color is ${formElements.color.value}`);
    const BLACK = '#000000';
    const WHITE = '#ffffff';
    if(formElements.color.value === BLACK)
        appendFeedback('!! Black is not a valid color to use.');
    if(formElements.color.value.toLowerCase() === WHITE)
        appendFeedback('!! White is not a valid color to use.');

    // Determine if the checkboxes for features are all on or all off.
    const selectedFeatures = 
        `${valueIn(formElements.feature[0])}${valueIn(formElements.feature[1])}${valueIn(formElements.feature[2])}`;
    appendFeedback(`The following features were selected: '${selectedFeatures}'`);

    // Determine if any of the cameras have been selected/turned on.

    // Switch:
    // We'll also apply the bg-color value to the border color of the <code> tag containing our feedback to the user.
})

const valueIn = function(checkboxElement) {
    // I'll use a ternary expression
    return checkboxElement.checked ? `${checkboxElement.value};` : '';
    //     \__ conditional ______/   \____  value if true ____/    \/
    //         expression                                           |- value if false
}

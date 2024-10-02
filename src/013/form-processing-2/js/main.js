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
    // indoorCamera, outdoorCamera, garageCamera are checkboxes
    let cameraStatus = 'The following cameras are on: ';
    if(formElements.indoorCamera.checked) cameraStatus += 'Indoor, ';
    if(formElements.outdoorCamera.checked) cameraStatus += 'Outdoor, ';
    if(formElements.garageCamera.checked) cameraStatus += 'Garage';
    if(cameraStatus.endsWith(': ')) {
        appendFeedback('None of the cameras are on.');
    } else {
        appendFeedback(cameraStatus);
    }

    // We'll also apply the bg-color value to the border color of the <code> tag containing our feedback to the user.
    // We have to use the control's name as an "index" in our collection of elements
    let radioButtons = formElements['bg-color'];
    let bgColor = radioButtons.value;
    // console.log(radioButtons);
    // appendFeedback(`The background color selected is ${bgColor}`);
    let codeElement = document.querySelector('code');
    codeElement.style.borderColor = bgColor;
    // I also need to set the borderWidth and borderStyle to get the changes visible.
    codeElement.style.borderWidth = '2x';
    codeElement.style.borderStyle = 'solid';

    // Switch:
    // If one of the radio buttons for base colors (red, green, blue) is present in the value from the color-picker by 50% or more (i.e. - greater than `#77), indicate that the color is strongly present in the selected color.
    let pickedColor = formElements.color.value;
    let colorPart;
    switch(bgColor) {
        case '#ff0000': // Red
            colorPart = '#771234'.substring(1,3);
            //           0123456
            //            \/
            //             |- Part of the Hex color value
            colorPart = pickedColor.substring(1, 3);
            break;
        case '#00ff00': // Blue
            colorPart = pickedColor.substring(3, 5);
            break;
        case '#0000ff': // Green
            colorPart = pickedColor.substring(5); // No end value means go to end of the string
            break;
        default:
            colorPart = '00';
            break;
    }
    let base10Part = parseInt('0x' + colorPart, 16);
    let midPoint = parseInt('0x77', 16);
    console.log(base10Part, pickedColor, midPoint);
    if(base10Part > midPoint)
        appendFeedback('Base color is strongly present in the picked color.');
    else
        appendFeedback('The picked color does not have much of the base color.');
})

const valueIn = function(checkboxElement) {
    // I'll use a ternary expression
    return checkboxElement.checked ? `${checkboxElement.value};` : '';
    //     \__ conditional ______/   \____  value if true ____/    \/
    //         expression                                           |- value if false
}

const addDots = function() {
    let myOutput = document.getElementById('dots');
    myOutput.innerText += '.';
    myOutput.setAttribute('title', `There are ${myOutput.innerText.length} dots`);
}

// Start an interval
let cancellationRef = setInterval(addDots, 1250);
console.log('Interval ref:', cancellationRef);

// Add an event listener to the button that will stop the interval.
document.querySelector('button')
        .addEventListener('click', function(evt) {
            if(cancellationRef) { // as long as cancellationRef is "truthy", we can stop the interval
                clearInterval(cancellationRef);
                cancellationRef = 0;
                evt.target.innerText = "Continue Interval";
            } else {
                // We start up a NEW interval
                cancellationRef = setInterval(addDots, 1250);
                evt.target.innerText = "Stop Interval";
                console.log('Interval ref:', cancellationRef);
            }
        })
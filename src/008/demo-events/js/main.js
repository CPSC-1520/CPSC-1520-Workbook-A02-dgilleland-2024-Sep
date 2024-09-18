/* Goals:
    - Show the paragraph with the poem to the user when the user clicks on the image.

*/
// 1. Create a function to show the poem
const handleFeatureClick = function() {
    console.log('img.feature was clicked...');
    let desc = document.querySelector('.feature.description');
    // The next line will remove the CSS class `hidden` from the element
    desc.classList.remove('hidden');
}

// 2. Cause my function to be called when the user clicks on the image
//    (I use the .addEventListener() on my DOM object to hook up my "response" to the "event")
let featureImage = document.querySelector('img.feature');
featureImage.addEventListener('click', handleFeatureClick);
//                            \_____/  \________________/
//                             |         |- the name of the function I want to run
//                             | the name of the DOM event that I am "listening" for

// Let's use the same event handler (handlFeatureClick) for a listener on another element
let headerEl = document.querySelector('header > h1');
headerEl.addEventListener('click', handleFeatureClick);

// 3. Let's use a double-click on the header element to HIDE the description.
//    This time, instead of passing a function by name for the event handler,
//    we'll pass in an anonymous function.
headerEl.addEventListener('dblclick', function () {
    var desc = document.querySelector('.feature.description');
    desc.classList.add('hidden');
})
//    An "anonymous function" is a function without a name.

// 4. Let's listen for the mouseover event on the image and log the mouse position to the console
featureImage.addEventListener('mouseover', function(event) {
    console.log('{mouseover} mouse position:', event.clientX, event.clientY);
    console.log(event); // so we can see the object/event details behind our function getting called
});

// 5. Let's listen for the mousemove event on the image and log the mouse position to the console
featureImage.addEventListener('mousemove', function(event) {
    console.log('{mousemove} mouse position:', event.clientX, event.clientY);
})

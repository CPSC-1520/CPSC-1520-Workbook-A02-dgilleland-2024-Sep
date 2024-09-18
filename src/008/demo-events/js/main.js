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
const headerEl = document.querySelector('header > h1');
headerEl.addEventListener('click', handleFeatureClick);

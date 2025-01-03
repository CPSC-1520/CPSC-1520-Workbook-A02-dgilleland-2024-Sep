// Utility functions/data
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const getDay = (someDate) => dayNames[someDate.getDay()];
const getShortDay = (someDate) => getDay(someDate).substring(0, 3);

const showDate = function(thisDate) {
    const getDatePortion = function(someDate) {
        if(someDate instanceof Date) {
            // Build a string with just the date portion
            // YYYY-MM-DD
            let text = `${someDate.getFullYear()}-${someDate.getMonth() + 1}-${someDate.getDate()} (${getShortDay(someDate)})`;
            return text;
        } else {
            // Not much I can do
            return undefined;
        }
    }

    let today = new Date(); // the point at which they have loaded the page
    thisDate.innerText = getDatePortion(today); // Let them know the date

    const logTime = function() {
        // TODO: figure out how to get the time portion
        // HINT: https://tecadmin.net/get-current-date-time-javascript/
    }

    console.log('main.js is loaded');
};
const output = document.getElementById('thisDate');
showDate(output);

document.querySelector('button').addEventListener('click', function(ev) {
    const rightNow = new Date();
    console.log("The current time is:", rightNow);
})
/**
 * renderFriend() will get information from my object and generate some HTML
 * to render onto the page.
 * @param {object} f 
 */
function renderFriend(f) {
	var output = '';

	output += '<h2>' + f.fullName() + '</h2>';
	output += '<h3>' + f.email + '</h3>';

	// super gross...
	document.body.innerHTML += output;
}

// create a re-usable function
const buildName = function (){
	return this.firstName + ' ' + this.lastName;
}
// create an array of object literals...
// [ , , , ] vs. { , , , , }
// array     vs. object
var friends = [
	{
		firstName: 'Jane',
		lastName: 'Doe',
		email: 'jd@example.com',
		fullName: buildName
	},
	{
		firstName: 'Jon',
		lastName: 'Doe',
		email: 'jond@example.com',
		fullName: buildName
	}];

// render friends...
for (var idx = 0; idx < friends.length; idx += 1) {
	renderFriend(friends[idx]);
}
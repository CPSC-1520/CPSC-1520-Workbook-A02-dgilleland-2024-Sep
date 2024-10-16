let names = [];
names.push('Fred');
names.push('Wilma');
names.push('Barney');
names.push('Betty');
console.table(names);

// An example of creating an object literal
let person = {
    // An object literal is a comma-separated list of
    // member declarations
    // The first four are simple properties
    firstName: 'Fred',
    lastName: 'Smith',
    age: 32,
    isMarried: true,
    // The fifth member is an array of strings
    children: [
        'Pebbles',
        'Bam-Bam'
    ],
    // We can also declare functions in our object
    fullName: function() {
        // Notice the use of the this keyword
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person);
// Here's another object literal
let address = {
    street: '123 Main St.',
    city: 'Bedrock',
    province: 'ON',
    postalCode: 'L2L 2L2'
};
console.log(address);
// Objects in JS can be mutated.
// Here I add the address object as a property of my person object
person.homeAddress = address; // .homeAddress is a brand new property of person
// When objects are made up of other objects, that's called Composition

console.log(person);
let salary;
person.income = salary;
console.table(person);

let stuff = [];

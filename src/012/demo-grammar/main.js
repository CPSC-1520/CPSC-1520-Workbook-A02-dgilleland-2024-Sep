/* The If-Else statement follows this grammar:

if(conditionalExpression)
    statementOrStatementBlock
else
    statementOrStatementBlock

where the "conditionalExpression" is some expression that will result in a true or false value, and the "statementOrStatementBlock" is either a single instruction/statement or a set of statements inside curly braces (statement block).

-----

Relational Operators

==      "is equal to" - equality operator
!=      "is not equal to" - equality operator
===     "is equal to" - identity operator
!==     "is not equal to" - identity operator
>       greater than
<       less than
>=      greater than or equal to
<=      less than or equal to

*/

// Explore a bit with some variables and values
let numberOne = 1;
let numberEight = 8;
let textEight = '8';
let name = 'Dan';
let temp; // I'll leave this undefined.

// Some 'if/else' statements
if(numberEight !== textEight) {
    console.log('The results don\'t match because they are different data types');
}
if(numberEight == textEight) {
    console.log('loose comparison where automatic type conversion is taking place.');
}
if(numberEight) {
    console.log(`${numberEight} is a non-zero value, therefore is 'truthy'`);
}
if(temp) {
    console.log('temp has a value');
} else {
    console.log(`temp variable is ${temp}`);
}
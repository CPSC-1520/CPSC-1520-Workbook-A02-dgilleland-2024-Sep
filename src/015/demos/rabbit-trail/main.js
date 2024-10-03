// This demonstrates the concepts of functions as first-class objects
// which means we can "pass" a function to other functions.

let data = [
    100,
    101,
    102,
    "103 is Prime",
    'dog',
    'cat',
    { firstName: 'Anna', lastName: 'Lyst'},
    { firstName: 'Stew', lastName: 'Dent'}
]

// I'll just create a new function on my array object
data.process = function(funcCallback) {
    let all = arguments;
    for(index = 1; index < all.length; index++) {
        // Notice how I use the funcCallback as a function - I actually call it
        let result = funcCallback(this, all[index]);
        console.log(`Received ${result} when processing for ${all[index]}`);
    }
}

const typeIfExists = function(arr, item) {
    let found = false;
    let result = found;
    for(el of arr) {
        if(el === item) {
            result = typeof(el);
            found = true;
        }
    }
    return result;
}

const stringLengthOrIsEven = function(arr, item) {
    let found = false;
    for(el of arr)
        if(el === item)
            found = true;
    if(found)
        if(typeof(item) === 'string')
            return item.length;
        else if(typeof(item) === 'number')
            if(item % 2 === 0)
                return 'is even';
            else
                return 'is odd'
        else
            return 'not a string or number';
    else
        return found;
}

data.process(typeIfExists, 102, 'dog', 'bart'); // Notice that I pass in my function as an argument
console.log('Process with stringLengthOrIsEven....');
data.process(stringLengthOrIsEven, 102, 'dog', 'bart', { firstName: 'Anna', lastName: 'Lyst'});


console.log('Use the .forEach() that every JavaScript array has...');
const dump = function(el, index) {
    console.log(`[${index}] ==> ${el}`);
}
data.forEach(dump); // for each item in the array, call dump(el, index, arr) on the item
// Inside of forEach, it will execute the following:
//     dump(itemInTheArray, indexOfTheItem, arrayAsAWhole)
// The .forEach function expects an argument which is a "callback" that it can run/execute

//                                  C#
data.any = function(value) {    //  public bool Any(object value) {
    let found = false;          //      var found = false;
    for(item of this)           //      foreach(var item in this)
        if(item === value)      //          if(item == value)
            found = true;       //              found = true;
    return found;               //      return found;
}                               //  }

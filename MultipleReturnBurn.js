const demo = function (data) {
  if (isNaN(data)) {
    return 'Not a number';
  } else if (data > 100) {
    return 'Whoa - big number';
  }
}
demo('bob');
demo(1000);
demo(5);
const betterDemo = function(data) {
  let result = 'That looks like a number.';
  if(isNaN(data)) {
    result = 'Not a number';
  } else if (data > 100) {
    result = 'Whoa - big number';
  }
  return result;
}
function findElement(arr, func) {
  var num = 0;
  var newArray = arr.filter(func);
  num = newArray[0];
  return num;
}
// Examples
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); // returns 8
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }); // returns undefined
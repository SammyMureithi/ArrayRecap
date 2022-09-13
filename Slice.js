//Slice allows you to obtain subset element from an array
const nums = [1, 3, 4, 5, 6];
//we pass in two parameters that is the start of extraction and stop
console.log( nums.slice( 0, 3 ) );
//if the params are not specified the extraction start at index 0 and ends using the array length
//we could also use a slice method to clone our array
const newArray = nums.slice();
console.log( newArray );
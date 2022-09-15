const odd = [1, 3, 5];
const even = [2, 4, 6];
const combined = odd.concat( even );
console.log( combined );

let upper  = ['A','B','C'];
let lower  = ['a','b','c'];
let digits = [1,2,3];
let alphanumerics = upper.concat(lower, digits);
console.log( alphanumerics );

//we can us the spread operator to merge arrays
let even1 = [2, 4, 6];
let odd1 = [1, 3, 5];
let combined1 = [...odd1, ...even1];
console.log( combined1 );
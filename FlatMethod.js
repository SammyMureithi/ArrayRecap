const numbers = [1, 2, 3, [4, 5]];
//we could make this flat using the flat method
const flatNumbers = numbers.flat( 1 );
console.log( flatNumbers );

//we could also flatten an array that we don't know how deep its nested
const deep = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
const flatDeep = deep.flat( Infinity );
console.log( flatDeep );
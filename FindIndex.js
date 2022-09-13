/**
 * findIndex allows you to find the first element in an array that satisfies a provided
 * testing function
 * it returns the index of the element that satisfies a testing function or -1 if no
 *  element passed the test
 *  findIndex(testFn(element[,index[,arary]])[,thisArgs])
 */
let ranks = [1, 5, 7, 8,14 , 10, 7];
let index = ranks.findIndex( rank => rank > 7 );
console.log( index );
//we could also use this to find the product whose price is >1000
const products = [
    { name: "phone", price: 299 },
    { name: "computer", price: 1299 },
    { name: "tablet", price: 999 }
];
const indexProduct = products.findIndex( e => e.price > 1000 );
console.log( indexProduct );

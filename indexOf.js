/**
 * We use indexOf() to get the index of the first of the element
 * indexOf() method accepts two parameter that is searchElement and fromIndex 
 */
var score = [10, 20, 30, 40, 10, 45];
console.log( score.indexOf( 20 ) );
//we'll only get the index of the first occurence of the searchElement
console.log( score.indexOf( 10 ) );
//Here is how we could find all the the index of our searchElement

function find( element, myArray ) {
    let arr = [];
    var index = myArray.indexOf( element );
    while ( index != -1 ) {
        arr.push( index );
        index = myArray.indexOf( element, index + 1 );
    }
    return arr
}
console.log( find( 30, score ) );
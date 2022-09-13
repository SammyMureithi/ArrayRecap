/**
 * Array.lastIndexOf(searchElement[,fromIndex=Array.length-1])
 * In case you omit the fromIndex the search start from the beginning
 * If fromIndex is negative to start searching our machine add the negative index to array.length and starts
 * searching from the result
 * It start searching from behind
 */
const score = [10, 20, 30, 31, 93, 20, 390, 30, 47, 63];
console.log( score.lastIndexOf( 30 ) );

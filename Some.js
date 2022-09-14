const numbers = [2, 4, 4, 5, 5];
const res = numbers.some( e => e >= 5 );
console.log( res );

//Using the some method let's check if our array contain the given value
function exist( value, array ) {
    return array.some( e => e === value );
}
console.log( exist( 6, numbers ) );

//Let's check if our array has an element in our range
let ourRange = {
    min: 0,
    max: 5
};
let resRange = numbers.some( function ( e ) {
    return e >= this.min && e <= this.max;
}, ourRange );
console.log( resRange );

//lets take a closer look to empty array
// with some it will always return false unlike every
console.log( "Empty Array results" );
let emptyRes = [].some( elment => elment > 0 );
console.log( emptyRes );
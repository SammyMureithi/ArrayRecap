const numbers = [2, 4, 4, 5, 5];
const res = numbers.some( e => e >= 5 );
console.log( res );

//Using the some method let's check if our array contain the given value
function exist( value, array ) {
    return array.some( e => e === value );
}
console.log( exist( 6, numbers ) );
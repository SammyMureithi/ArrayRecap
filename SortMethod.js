let numbers = [0, 1 , 2, 3, 10, 20, 30 ,25,21];
numbers.sort( ( a, b ) => {
    if ( a > b ) return 1;
    if ( a < b ) return -1;
    return 0;
} );
console.log( numbers );
console.log("Short method")
let numbers1 = [0, 1, 2, 3, 10, 20, 30, 25, 21];
numbers1.sort( ( a, b ) => a - b );
console.log( numbers1 );
//let try sorting a string array alphabetically
let string = ['cat', 'dog', 'elephant', 'bee', 'ant'];
string.sort();
console.log( string );

//we could reverse the order of our array to descending order
string.sort( ( a, b ) => {
    if ( a > b ) return -1;
    if ( a < b ) return 1;
    return 0;
} );
console.log( "Descending string order" );
console.log( string );
let numbers = [0, 1 , 2, 3, 10, 20, 30 ,25,21];
numbers.sort( ( a, b ) => {
    if ( a > b ) return 1;
    if ( a < b ) return -1;
    return 0;
} );
console.log( numbers );
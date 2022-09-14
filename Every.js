const numbers = [3, 5, 1, 3];
const isEven = numbers.every( number => {
    return number % 2 == 0;
} );
console.log( isEven );
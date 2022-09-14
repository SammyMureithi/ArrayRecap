const numbers = [3, 5, 1, 3];
const isEven = numbers.every( number => {
    return number % 2 == 0;
} );
console.log( isEven );
//suppose we have a ramge to check if our elements fit within the range
let range = {
    min: 0,
    max: 5
};
const isInRange = numbers.every( function(number){
    return number >= this.min && number <= this.max;
}, range );
console.log("Range "+ isInRange );
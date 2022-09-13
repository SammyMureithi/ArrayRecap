const score = [9, 83, 42, 26, 44, 374, 477, 2923, 39382,-0];
console.log( score.includes( 10 ) );
/**
 * Returns false if the element is not found in the array
 * otherwise true
 */
console.log( score.includes( 42 ) );
console.log( score.includes( 0 ) );
let bmw = { name: "BMW" },
    toyota = { name: "Toyota" },
    ford = { name: "Ford" }

let cars = [toyota, ford];
console.log( cars.includes( ford) );
console.log( cars.includes( bmw ) );    
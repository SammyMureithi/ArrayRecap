const myArray = [];
//we could use array push to add 1 single element to an array
myArray.push( "Element 1" );
console.log( myArray );
//we could also add multiple elements to our array
myArray.push( "element2", "Element3", "Element4", "Element5" );
console.log( myArray );

//we could also add a whole array to another array
const fruits = ["Orange", "Apple", "Mango", "Watermelon"];
//lets add all the fruits to the myArray array using the spread operator
myArray.push( ...fruits );
console.log( myArray );

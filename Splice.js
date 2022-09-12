const color = ["red", "Pink", "Yellow", "Dark"];
/**
 * With splice we can pass two parameters (position,num)
 *Splice with two parameter by default is used to delete an elements
 Its returns the deleted elements
 Below we are removing two  elemnets from index 2 onwards 
 */
console.log( color.splice( 2, 2 ) );
console.log( color );
//we could also use splice method to insert new element from an array
//position here is where to start inserting the newElement from
color.splice( 1, 0, "Element1", "Element2", "Element3" );
console.log( color );
//we could also use the splice method to replace an element from an array
//let replace the second element with "ElementN"
color.splice( 1, 1, "Replacement" );
console.log( color );
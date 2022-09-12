const color=["red","Pink","Yellow","Dark"];
//we can get the length of our dense array using the length property
console.log( color.length );

//length property won't give us the correct size of a sparse array
const sparseColor = ["red", , "Yellow", "Pink", "Yellow", "Dark"];
console.log( sparseColor.length );

//we could also use the length property to empty our array
const toBeClearedArray = ["Green", "Red", "White", "Yellow", "Purple"];
toBeClearedArray.length = 0;
console.log( toBeClearedArray );

//we could also cleare out some elements from an array
const cleareSome = ["Green", "Red", "White", "Yellow", "Purple"];
cleareSome.length = 4;
console.log( cleareSome );

//we could also make an array sparse
const toBeSparse = ["Green", "Red", "White"];
toBeSparse[6] = "Pink";
console.log( toBeSparse );

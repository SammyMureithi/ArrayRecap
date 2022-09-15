let sentences = ["JavaScript Array flatMap()", " ", "is", " ", "Awesome"];

let words = sentences.flatMap( element => element.split( " " ) );
console.log( words );
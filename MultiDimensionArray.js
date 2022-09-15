let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];
console.table( activities );
//we could access values of our array as follows
console.log( activities[0][0] );


//we could also add a new element to a multidimension Array
activities.push( ["Programming", 3] );
console.table( activities );

//we could also add values to our multidimensional array
activities.map( activity => {
    let perC = ( activity[1] / 24 *100).toFixed();
    activity[2] = perC+ "%";
} )
console.table( activities );

//we could also remove elements from our array
activities.forEach( activity => {
    activity.pop( 2 );
} )
//We could also get rid our array in our multidimensional array
activities.splice( 1, 1 );
console.table( activities );

//lets now iterate over our array in multidimension array
for ( i = 0; i < activities.length; i++ ){
    let atArray = activities[i];
    for ( k = 0; k < atArray.length; k++ ){
        console.log( `[${i},${k}]=${activities[i][k]}` );
    }
}
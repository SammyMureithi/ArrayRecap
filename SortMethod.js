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
//what happens when we have mixed string cases
let mixedCaseAnimals = [
    'Cat', 'dog', 'Elephant', 'bee', 'ant'
];
mixedCaseAnimals.sort( ( a, b ) => {
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    return x == y ? 0 : x > y ? 1 : -1;
} );
console.log( "Mixed String Case Array" );
console.log( mixedCaseAnimals );
//Let's take a look on how we sort string of non-ASCII characters
let animaux = ['zèbre', 'abeille', 'écureuil', 'chat'];
animaux.sort( ( a, b ) => {

    return a.localeCompare( b );
} );
console.log( animaux );

//Lets learn about sorting array object
let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];
//lets sort the object considering a numeric value
employees.sort( ( a, b ) => {
    return a.salary - b.salary;
} );
console.log( 'Numeric sort' );
console.table( employees );
//let sort the object considering a string value
employees.sort( ( a, b ) => {
    return a.name == b.name ? 0 : a.name > b.name ? 1 : -1;
} );
console.log( 'String sort' );
console.table( employees );
//let's sort considering the date value

employees.sort( ( a, b ) => {
    x = new Date( a.hireDate );
    y = new Date( b.hireDate );
    return x - y
} );
console.table( employees );
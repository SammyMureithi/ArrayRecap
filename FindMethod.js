/**
 * find(callback(element[,index[,array]])[,thisArgs])
 * the callback accepts 3 parameters
 *    * element is the current element
 *    * index the index of the current element
 *    * array the array that the find() was called upon
 *  the thisArgs ist the object used as this inside the callback
 *  if the callback returns a truthy value the find() immediatly returns the element and stops 
 *   searching 
 * Otherwise it returns undefined
 */
let numbers = [1, 6, 3, 4, 5];
console.log( numbers.find( e => e % 2 === 0 ) );
/**
 * Suppose we have a list of customers objects with name and credit properties as follows
 * Lets find the first customer whose credit is greater than 100
 */
let customers = [
    {
        name: "ABC Inc",
        credit:100
    },
    {
        name: "Corp Bank",
        credit:200
    },
    {
        name: "KCB",
        credit:300
    }
]
console.log( customers.find( customer => customer.credit > 100 ) );
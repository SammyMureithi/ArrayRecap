let shoppingCart = [
    {
      product: 'phone',
      qty: 1,
      price: 500,
    },
    {
      product: 'Screen Protector',
      qty: 1,
      price: 10,
    },
    {
      product: 'Memory Card',
      qty: 2,
      price: 20,
    },
];
/**
 * With the reduce() method we have two parameters that is the callbackFn and an initialParameter
 * For object to work as we want lets specify the initialValue but with just plain array no need 
 */
let total = shoppingCart.reduce( ( prevValue, currentValue ) => {
    return prevValue + currentValue.qty * currentValue.price;
} ,0);
console.log( total );
const array = [20, 38, 383, 1, 19];
const res = array.reduce( ( prevValue, currentValue ) => {
    return prevValue + currentValue
});
console.log( res );
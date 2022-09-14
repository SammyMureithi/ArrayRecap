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
 */
let total = shoppingCart.reduce( ( prevValue, currentValue ) => {
    console.log( prevValue );
    return prevValue + currentValue.qty * currentValue.price;
} ,0);
console.log( total );
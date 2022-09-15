let sentences = ["JavaScript Array flatMap()", " ", "is", " ", "Awesome"];

let words = sentences.flatMap( element => element.split( " " ) );
console.log( words );

//we could also use flat map to add items to a array as we do here below
let cart = [{
    name: 'Smartphone',
    qty: 2,
    price: 500,
    freeOfCharge: false
},
{
    name: 'Tablet',
    qty: 1,
    price: 800,
    freeOfCharge: false
}
];
let output = cart.flatMap( item => {
    if ( item.name === "Smartphone" ) {
        return [item, {
            name: 'Screen Protector',
            qty: item.qty,
            price: 5,
            freeOfCharge: true
        },
        {
            name: 'Screen',
            qty: item.qty,
            price: 1200,
            freeOfCharge: false
        }
        ]
    }
    else {
        return [item, {
            name: 'Shirt',
            qty: item.qty,
            price: 100,
            freeOfCharge: true
        }]
    }
} );
console.table( output );

//lets calculate the total of our cart
let total = output.reduce( ( sum, item ) => {
    if ( !item.freeOfCharge ) {
        sum += item.price * item.qty
    }
    return sum
}, 0 );
console.log("Total to be paid Kes." +total );
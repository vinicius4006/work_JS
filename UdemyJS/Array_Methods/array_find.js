
var inventory = [
    {name: 'jaca', quantity: 1},
    {name: 'banana', quantity: 1},
    {name: 'cereja', quantity: 2}
];

// currentValue (obrigatório): O elemento atual sendo processado no array
// index (opcional): O índice do elemento atual sendo processado no array
// arr (opcional): O array de origem


// { name: 'cereja', quantity: 5 }
console.log(inventory.find(item => item.quantity === 2)); 

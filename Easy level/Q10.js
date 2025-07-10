//  Cart Price Calculation (Array + Object)
//  You are building an e-commerce website.
//  The shopping cart is an array of objects where each object has productName and price properties. 
//  Write a function that calculates the total price of all items in the cart.


const cartProducts = [
    {
        productName : "old Watch", price: 1900
    },

    {
        productName : "Earbuds", price: 1000
    },

    {
        productName : "nokia mobile", price: 1399
    }
]

const cartPrice = ()=>{
    let sum = 0;
    for(let i = 0; i< cartProducts.length; i++){
        sum += cartProducts[i].price;
    }
    return sum;
}

let cartSum = cartPrice();
console.log(cartSum);

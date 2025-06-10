//  Product Pricing (Object)
//  You’re managing a catalog of products where each product is represented as
//  an object with properties: name, category, and price. Write a function that
//  updates the price of a specific product.

const products = {
    1: {
        name: "Television", category: "electronic device", price: 23000
    },
    2: {
        name: "AC", category: "electronic device", price: 25000
    },

    3: {
        name: "Smart Phone", category: "electronic device", price: 15000
    }
}


const updatePrice = (item, newPrice)=>{
    for(let key in products){
        if(products[key].name === item){
            products[key].price = newPrice;
            console.log(newPrice);
            
        }
    }
}

updatePrice("Smart Phone", 23000);

console.log(products[3].price);

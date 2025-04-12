// Q. Inventory Management (Array)

//  You are working at a store that has an inventory list of products.
//  You are given an array of product names that are currently in stock.
//  Write a function to check if a specific product is in stock.

const products = ["Shoes", "Jackets", "Shirts", "Pants", "Jeans"];

let checkProduct = (product)=>{
    for(let i = 0; i<products.length; i++){
        if(product === products[i] ){
            return true;
        }
        
    }
    return false;
}   

let value = checkProduct("Jeans"); // true
console.log(value);

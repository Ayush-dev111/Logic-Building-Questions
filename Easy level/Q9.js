// Find Product by ID (Object)
// You have a product catalog where each product has an id and name. 
// Write a function that takes an ID and returns the product with that ID.

const products = {
    1: {id: 123, name: "Pen"},
    2: {id: 456, name: "Pencil"},
    3: {id: 657, name: "Eraser"}
}

const checkId = (id)=>{
    for(let key in products){
        if(products[key].id === id){
            return products[key];
        }
    }
    return "product not found";
}

let value = checkId(123);
console.log(value);





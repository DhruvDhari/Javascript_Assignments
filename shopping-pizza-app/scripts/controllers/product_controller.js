//Product Controller -It is a glue b/w view and model
//controller -I/O View Layer
//Data Exchange b/w view and model.
// window.addEventListener(
//     'load',bindevents()
// )
//  function bindevents(){
// document.getElementById('clickme').addEventListener('click',()=>{
//     alert('Hello');
// })

//  }

import productOperations from "../services/product_operations.js";

async function loadPizzas(){
    const pizza =await productOperations.loadProducts();
    console.log('Pizzas are ',pizza);
}

loadPizzas();







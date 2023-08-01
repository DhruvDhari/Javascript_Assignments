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
    const rowdiv=document.getElementById("loaddata");
    let n=pizza.length;
    for(let i=0;i<n;i++ ){
        // let pizza_name =pizza[i]["name"];
        // // let image_url = pizza[i].
        // // element.children[i].img.src=image_url;
        // element.innerHTML=pizza_name;
        const col=document.createElement('div');
        col.classList.add('col-4');
        col.innerHTML=`
        <div class="card" >
        <img src="${pizza[i].url}" alt="">
          <div class="card-body">
            <h5 class="card-title">${pizza[i].name}</h5>
            <p class="card-text">${pizza[i].desc}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`;
        rowdiv.appendChild(col);

    }
}

loadPizzas();







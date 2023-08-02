//Product Controller -It is a glue b/w view and model
//controller -I/O View Layer
//Data Exchange b/w view and model.
// window.addEventListener(
//     'load',bindevents()
// )
//  function bindevents(){
// document.getElementById('clickme').addEventListener('click',()=>{
//     alert('Mahesh Dalle🤟🤟🤟');
// })

//  }

import productOperations from "../services/product_operations.js";

// async function loadPizzas(){
//     const pizza =await productOperations.loadProducts();
//     console.log('Pizzas are ',pizza);
//     const rowdiv=document.getElementById("loaddata");
//     let n=pizza.length;
//     for(let i=0;i<n;i++ ){
//         // let pizza_name =pizza[i]["name"];
//         // // let image_url = pizza[i].
//         // // element.children[i].img.src=image_url;
//         // element.innerHTML=pizza_name;
//         const col=document.createElement('div');
//         col.classList.add('col-4');
//         col.innerHTML=`
//         <div class="card" >
//         <img src="${pizza[i].url}" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${pizza[i].name}</h5>
//             <p class="card-text">${pizza[i].desc}</p>
//             <a href="#" class="btn btn-primary">Add to Cart</a>
//           </div>
//         </div>`;
//         rowdiv.appendChild(col);

//     }
// }

// loadPizzas();


// *******************************************************
//              COPY PASTE FROM SIR CODE
// *******************************************************


async function loadPizzas(){
  const pizzas = await productOperations.loadProducts();
  console.log('Pizzas are ', pizzas);
  for(let pizza of pizzas){
      preparePizzaCard(pizza);
  }
}
loadPizzas();

function preparePizzaCard(pizza){
  const outputDiv = document.querySelector('#output');
  const colDiv = document.createElement('div');
  colDiv.className = 'col-4';
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  cardDiv.style = "width: 18rem;";
  colDiv.appendChild(cardDiv);
  const img = document.createElement('img');
  img.src = pizza.url;
  img.className = 'card-img-top';
  cardDiv.appendChild(img);
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  cardDiv.appendChild(cardBody);
  const h5 = document.createElement('h5');
  h5.className = 'card-title';
  h5.innerText = pizza.name;
  const pTag = document.createElement('p');
  pTag.className = 'card-text';
  pTag.innerText = pizza.desc;
  const button = document.createElement('button');
  button.innerText = 'Add to Cart';
  button.className = 'btn btn-primary';
  cardBody.appendChild(h5);
  cardBody.appendChild(pTag);
  cardBody.appendChild(button);
  outputDiv.appendChild(colDiv);


}


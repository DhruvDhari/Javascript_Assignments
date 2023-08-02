//contains the logic for fetching.
// adding ,sorting,searching,
//deletion,updation
import Product from "../models/product.js";
import makeNetworkCall from "./api_client.js";

const productOperations={
    pizzas:[],
    carts:[],
    addToCart(product){
        this.carts.push(product);
    },
    removeFromCart(product){
        this.cart=this.carts.filter(pizza=>pizza.id !== product.id);
    },
    async loadProducts(){
        const pizza =await makeNetworkCall;
        const pizzaArray =pizza['Vegetarian'];
        
        const productsArray=pizzaArray.map(pizza=>{
            const currentPizza=new Product(pizza.id,pizza.name,pizza.menu_description,pizza.price,pizza.assets.product_details_page[0].url);

            return currentPizza;
        })
       this.pizzas=productsArray;
        console.log('Product Array ',productsArray);
        return productsArray;
    },
    sortProducts(){

    },
    searchProducts(id){
        console.log('search pizza :',this.pizzas.length,'Id ',id);
        const searched=this.pizzas.filter(pizza=>pizza['id']===id);
        return searched;
    }


}

export default productOperations;
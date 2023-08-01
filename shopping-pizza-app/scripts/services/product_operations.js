//contains the logic for fetching.
// adding ,sorting,searching,
//deletion,updation
import Product from "../models/product.js";
import makeNetworkCall from "./api_client.js";

const productOperations={
    async loadProducts(){
        const pizza =await makeNetworkCall;
        const pizzaArray =pizza['Vegetarian'];
        const productsArray=pizzaArray.map(pizza=>{
            const currentPizza=new Product(pizza.id,pizza.name,pizza.menu_description,pizza.assets.product_details_page[0].url);

            return currentPizza;
        })
        console.log('Product Array ',productsArray);
        return productsArray;
    },
    sortProducts(){

    },
    searchProducts(){

    }


}

export default productOperations;
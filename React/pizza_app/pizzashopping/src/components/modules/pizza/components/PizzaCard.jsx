import React from 'react'
import networkOperation from '../../../shared/services/networkcall'

const PizzaCard = () => {

    const getPizza=async()=>{
        const allPizzas =await networkOperation.getData();
        console.log(allPizzas);
    }

    getPizza();
  return (
    <div>Pizza Card</div>
  )
}

export default PizzaCard
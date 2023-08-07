import React from 'react'
import networkOperation from '../../../shared/services/networkcall'

const PizzzaCard = () => {

    const getPizza=async()=>{
        const allPizzas =await networkOperation.getData(url);
        console.log(allPizzas);
    }

    getPizza();
  return (
    <div>Pizza Card</div>
  )
}

export default PizzzaCard
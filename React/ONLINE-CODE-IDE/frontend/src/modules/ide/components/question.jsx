import React, { useState } from 'react'
import { apiClient } from '../../../shared/services/api-clients'
// import { Typography,Box,Toolbar} from '@mui/material'



const Question = () => {
  const [data,setdata]=useState(null);
  const getQuestion= async()=>{
    const response= await apiClient.get(process.env.REACT_APP_QUESTION_URL);
    console.log(response);
    setdata(response)
   }
   window.onload=()=>{
    getQuestion()
  }
   


   
  return (
   <>
  <div >
    {/* <button >Click to show data</button> */}
    {data==null?"Loading... ":<h2>{data.question}</h2>}
    
  </div>
 
  
  
   </>
  )
}

export default Question
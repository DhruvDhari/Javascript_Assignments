import React from 'react'

export default function Greet(props) {
    const date= new Date();
    const time =date.getHours();
    let greet;
    if(time<12){
        greet=`Good Morning ${props.name}`;
    }else if(12<=time<4){
        greet=`Good Afternoon ${props.name}`;
    }else if(4<time<=7){
        greet=`Good Evening ${props.name}`;
    }
  return (
    <div>

        <h1>{greet}</h1>
      
        

      
    </div>
  )
}



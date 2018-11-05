import React from 'react'; 

export default function Temperature(props){
  const delta = Math.abs(props.answer - props.guess)
  let temperature = 'cold';
    if(delta <10){
      temperature = 'hot'
    } else if(delta <20){
      temperature = 'warm'
    } else if (delta<30){
      temperature = 'cool'
    } 
  return (
    <div className="temperature"><p>{temperature}</p></div>
  )
}




//hot - 0-10 
//warm 10-20
//cool 20-30
//cold 30+

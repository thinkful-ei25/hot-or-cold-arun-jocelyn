import React from 'react';

export default function GuessDisplay(props){
  return (
    <div className="Guess">
     <p>Guess #<em>{props.numGuesses}</em></p>
    </div>
  )
}

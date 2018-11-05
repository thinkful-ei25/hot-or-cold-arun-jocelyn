import React from 'react';

export default function GuessDisplay(props){
  return (
    <div className="number-of-guesses">
     <p>Guess #<em>{props.numGuesses}</em></p>
    </div>
  )
}

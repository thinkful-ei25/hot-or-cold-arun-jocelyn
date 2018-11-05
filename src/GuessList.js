import React from 'react';
import Guess from './Guess'; 

export default function GuessList(props){
  const guesses = props.guesses.map((guess) => {
    return <Guess  guess={guess} />
  })
  return (
    <ul className="guess-list">{guesses}</ul>
  )
}

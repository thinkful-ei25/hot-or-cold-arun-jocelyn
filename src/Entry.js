import React from 'react';

export default function Entry(props){
  return (
    <form className="entry-form">
      <input placeholder="enter your guess" type="number"></input>
      <button type="submit">Guess</button>
    </form>
  )
}

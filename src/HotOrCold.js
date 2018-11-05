import React from 'react'; 
import Temperature from './Temperature'; 
import GuessDisplay from './GuessDisplay'; 
import Entry from './Entry'; 
import GuessList from './GuessList'; 

import './HotOrCold.css';



export default class HotOrCold extends React.Component{
    constructor(props){
      super(props)
      this.state={guesses:[20,30,25], answer:25}; 
    } 
  render(){
    return(
      <main className="hot-or-cold">
        <div className="hot-or-cold__centered">
          <header>
            <nav>
              <ul>
                <li>What?</li>
                <li>+New Game</li>
              </ul>
            </nav>
            <h1>Hot Or Cold</h1>
            </header>
          <section className="HOC-game">
          <Temperature answer={this.state.answer} guess={this.state.guesses[this.state.guesses.length-1]} />
          <Entry/>
          <GuessDisplay numGuesses={this.state.guesses.length}/>
          <GuessList guesses={this.state.guesses}/>
          </section>
        </div>
      </main>
    )
  }
}

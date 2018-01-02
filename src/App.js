import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Targets from './components/Targets';
import people from './people.json';


const selectedFriends = [0];

class App extends Component {
  state = {
    score: 0,
    highscore: 0,
    people,
    selectedFriends,
  };

  alreadySelected = (id) => {
    // If selected toon is not in the array, then push him in there, and add 1 to the score.
    if (this.state.selectedFriends.indexOf(id) === -1) {
      this.state.selectedFriends.push(id);
      this.setState({ score: this.state.score + 1 });
      this.shuffle(this.state.people);
      console.log(`Current Score: ${this.state.score}`);
    } else {
    // if selected toon is in the array, game over, reset score, reset selectedFriends array. If high score, set new high score.
      if (this.state.score > this.state.highscore) {
        this.setState({ highscore: this.state.highscore = this.state.score });
      }
      this.setState({ score: this.state.score = 0 });
      this.setState({ selectedFriends: this.state.selectedFriends = [0] });
      console.log(`Current Score: ${this.state.score}`);
    }
  }

  // ====================================================================================
  // SHUFFLE -- STACK OVERFLOW:
  shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  // ====================================================================================

  render() {
    return (
      <div>
        <Header
          currentScore={this.state.score}
          highScore={this.state.highscore}
        />
        <Jumbo />
        <div className="container">
          {this.state.people.map(person => (
            <Targets
              alreadySelected={this.alreadySelected}
              id={person.id}
              image={person.image}
            />
          ))}
        </div>

      </div>
    );
  }
}

export default App;

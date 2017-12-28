import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Targets from './components/Targets';
import people from './people.json';


const selectedFriends = [0];
const chancesRemaining = 3;
const score = 0;
const highscore = 0;

class App extends Component {
  state = {
    people,
    score: 0,
    highscore: 0,
  };

  alreadySelected = (id) => {
    if (selectedFriends.indexOf(id) === -1) {
      selectedFriends.push(id);
      this.setState({ score: this.state.score + 1 });
      console.log(`Current Score: ${this.state.score}`);
    } else {
      console.log('oops');
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

  // Used like so
  // var arr = [2, 11, 37, 42];
  // arr = shuffle(arr);
  // console.log(arr);

  // ====================================================================================

  // TEST FUNCTION W/ END OF GAME
  // alreadySelected = (id) => {
  //   if (selectedFriends.indexOf(id) === -1) {
  //     selectedFriends.push(id);
  //   } else if ({this.state.chancesRemaining} > 0) {
  //     console.log('oops');
  //     this.setState({ chancesRemaining: this.state.chancesRemaining - 1 });
  //     console.log(`Chances remaining: ${this.state.chancesRemaining}`);
  //   } else {
  //     console.log("Game over")
  //   }
  // }

  // ====================================================================================

  render() {
    return (
      <div>
        <Header
          numLeft={this.state.chancesRemaining}
          currentScore={this.state.score}
          highScore={this.state.highscore}
        />
        {/* <div className="container"> */}
        <Jumbo numLeft={this.state.chancesRemaining} />

        <div className="container">
          {this.state.people.map(person => (
            <Targets
              shuffleDeck={this.shuffle}
              alreadySelected={this.alreadySelected}
              id={person.id}
              key={person.id}
              name={person.name}
              image={person.image}
              occupation={person.occupation}
              location={person.location}
            />
          ))}
        </div>

      </div>
    );
  }
}

export default App;

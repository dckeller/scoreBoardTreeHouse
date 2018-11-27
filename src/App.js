import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {

  state = {
    players: [
    {
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }
    ]
  };

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta   
    }));
  }

  handleDeletePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id)    
      }
    });
  }
  
  render() {
    return (
      <div className="scoreboard">
      <Header 
      title="Scoreboard" 
      totalPlayers={ this.state.players.length }
      />

    {/* JavaScript Iteration */}
    {this.state.players.map( (player, index) => 
      <Player
      name={player.name}
      score={player.score}
      id={player.id}
      changeScore={this.handleScoreChange}
      key={player.id.toString()}
      index={index}
      removePlayer={this.handleDeletePlayer}
      /> 
      )}
    </div>
    );
  }
}

export default App;
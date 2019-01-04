import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

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

  // player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta   
    }));
  }

  handleAddPlayer = (name) => {
    let newplayer = {
      name,
      score: 0,
      id: this.prevPlayerId += 1
    }
    this.setState( prevState => ({
      players: prevState.players.concat(newplayer)
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
      players={ this.state.players }
      />

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

    <AddPlayerForm addPlayer={this.handleAddPlayer}/>
    </div>
    );
  }
}

export default App;
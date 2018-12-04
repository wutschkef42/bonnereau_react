import React from 'react';
import ReactDOM from 'react-dom';
import { PoseGroup } from 'react-pose';
import shuffle from './shuffle';
import Cup from './Cup'
import Message from './Message'
import './styles.css';


class Bonneteau extends React.Component {
  state = { 
        items: [0, 1, 2], 
        shuffleCount: 8,
        winningCup:  Math.floor(Math.random() * 3),
        ID: 0,
        selectedCup: 0,
        winnerHasBeenSelected: 0,
    };

  componentDidMount() {
    this.setState({
      ID: setInterval(() => {
        this.setState({
          items: shuffle(this.state.items),
          shuffleCount: this.state.shuffleCount - 1,
        });
      }, 700),
    })
  }

  componentDidUpdate() {
      if (this.state.shuffleCount <= 0) {
          clearInterval(this.state.ID);
      }
  }

  restartGame() {
    if (this.state.shuffleCount <= 0) {
      this.setState({
        shuffleCount: 8,
        selectedCup: 0,
        winnerHasBeenSelected: 0,
        winningCup: Math.floor(Math.random() * 3),
        ID: setInterval(() => {
          this.setState({
            items: shuffle(this.state.items),
            shuffleCount: this.state.shuffleCount - 1,
          });
        }, 700),
      });
    }
  }

  handleMouseClick(id, e) {
    if (this.state.winnerHasBeenSelected)
      return ;
    if (this.state.shuffleCount <= 0) {
      this.setState({
        winnerHasBeenSelected: 1,
        selectedCup: id});
    }
  }

  manageCups(id) {
    if (this.state.winnerHasBeenSelected) {
      if (this.checkWinner()) {
        if (id === this.state.selectedCup) {
          return ("winner");
        } else {
          return ("blank");
        }
      }
      else
      {
        if (id === this.state.selectedCup) {
          return ("loser");
        } else {
          return ("blank");
        }
      }
    }
    if (this.state.shuffleCount <= 5)
      return ("blank");
    if (id === this.state.winningCup)
      return  ("focus");
    else
      return ("blank");
  }

  checkWinner() {
    if (this.state.selectedCup === this.state.winningCup)
      return (true);
    else
      return (false);
  }

  render() {
    const { items } = this.state;
    return (
      <div>
      <Message
        shuffleCount={this.state.shuffleCount} 
        winnerHasBeenSelected={this.state.winnerHasBeenSelected} 
        hasWon={this.checkWinner.bind(this)()}
      />
      <ul>
        <PoseGroup>
          { items.map(id => <Cup pose={this.manageCups(id)} 
            onClick={(e) => this.handleMouseClick(id, e)} key={id} />) }
        </PoseGroup>
      </ul>
      <button
        onClick={this.restartGame.bind(this)}
      >restart
      </button>
      </div>
    );
  }
}

ReactDOM.render(<Bonneteau />, document.getElementById('root'));

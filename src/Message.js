
import React from 'react';

function Message(props) {
    if (props.winnerHasBeenSelected) {
      if (props.hasWon)
        return (
          <p>You win!</p>
        );
      else {
        return (
          <p>You lose!</p>
        );
      }
    }
    if (props.shuffleCount === 0) {
      return (
        <p>Please select winner</p>
      );
    } else {
      return (
        <p>Shuffle in progress...</p>
      );  
  }
}

export default Message;
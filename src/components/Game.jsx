import React from 'react';
import Board from'./Board';
import { connect } from 'react-redux';
import c from './../constants';

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(i) {
    console.log("i", i)
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const { dispatch } = this.props;
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.stepNumber % 2 === 0 ? 'X' : 'O';
    let newSquares = {squares: squares}
    let action = {
      type: c.SQUARE_CLICK,
      newSquares: newSquares,
      step: this.props.stepNumber
    }
    dispatch(action);

    console.log(this.props.history);
  }

  jumpTo(step) {
    const { dispatch } = this.props;
    let action = {
      type: c.STEP_CLICK,
      step: step
    }
    dispatch(action);
  }

  computerMove() {

  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i=0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    console.log(this.props);
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.stepNumber % 2 === 0 ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares = {current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.history,
    stepNumber: state.stepNumber
  }
}


export default connect(mapStateToProps)(Game);

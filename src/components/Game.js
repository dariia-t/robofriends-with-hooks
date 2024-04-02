import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Button from './Button';

// Define the CSS styles for the components
const useStyles = createUseStyles({
  game: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  gameBoard: {
    marginBottom: '20px',
  },
  status: {
    color: '#9eebce',
    margin: '20px',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  boardRow: {
    display: 'flex',
    marginBottom: '-1px',
  },
  square: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90px',
    height: '90px',
    border: '1px solid #9eebce',
    fontSize: '24px',
    cursor: 'pointer',
  },
});

function Square({ value, onSquareClick }) {
  const classes = useStyles();
  return (
    <button className={classes.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const classes = useStyles();

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className={classes.status}>{status}</div>
      <div className={classes.boardRow}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className={classes.boardRow}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className={classes.boardRow}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const classes = useStyles();
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li style={{color: '#9eebce'}} key={move}>
        <Button label={description} style={{color: '#0ccac4', backgroundColor: '#05375f'}} onClick={() => jumpTo(move)}/>
      </li>
    );
  });



  return (
    <div className={classes.game}>
      <div className={classes.gameBoard}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


/*const useStyles = createUseStyles({
    myButton: {
        cursor: 'pointer',
        margin: '10px auto',
        textAlign: 'center',
        color: '#9eebce',
        fontSize: '1rem',
        backgroundColor: '#05375f',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: '0.5rem',
        padding: '1rem',
        borderWidth: '0.1rem',
        boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.4)',
        },
      },
      randomNum: {
        marginTop: '10px',
        textAlign: 'center',
        fontSize: '1.5rem',
        color: '#05375f',
      },
      myInfo: {
        textAlign: 'center',
        backgroundColor: '#9eebce',
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem',
        margin: '2rem',
        borderRadius: '0.5rem',
        alignItems: 'center', 
      },
      input: {
        padding: '1rem',
        border: '1px solid green',
        backgroundColor: 'lightblue',
        '&::placeholder': {
            fontSize: '1.1rem', 
        },
    },
})

const Game = () => {
    const classes = useStyles();
    const [randomNumber, setRandomNumber] = useState(null);
    const [input, setInput] = useState('');
    const [guess, setGuess] = useState(0);
    const [message, setMessage] = useState('');
    const [win, setWin] = useState('');

    const handleClick = () => {
      const randomNum = Math.floor(Math.random() * 101);
      setRandomNumber(randomNum);
      if (guess <= randomNumber + 10 && guess >= randomNumber - 10){
        setWin("Congrats! You Won!");
      }else{
        setWin("Sorry buddy, you lost...");
      }
    };

    
    const handleChange = (event) => {
      setInput(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const parsedNumber = parseInt(input);
      setGuess(parsedNumber);
      if (!isNaN(parsedNumber)) {
        setMessage(`Your guess is: ${parsedNumber}`);
      } else {
        setMessage('Invalid input. Please enter a valid number.');
      }
    };

    return(
        <div>
        <h1>Gain extra power points for your robot</h1>
      
          <div className={classes.myInfo}>
            <p className={classes.randomNum}> Guess How Much Power You Will Get</p>
            <form onSubmit={handleSubmit}>
                <label className={classes.randomNum}>
                Enter a number:     
                <input type="text" value={input} onChange={handleChange} className={classes.input}/>
                </label>
                <button className={classes.myButton} type="submit">Submit</button>
            </form>
            <p className={classes.randomNum}>{message}</p>
            <button className={classes.myButton} onClick={handleClick}>
              Try My Luck!
            </button>
            {randomNumber !== null && (
          <p className={classes.randomNum}>Random Number: {randomNumber}</p>
          
        )}
        <p className={classes.randomNum}> {win}</p>
           {/* <h2 className={classes.title}>{data[0].title}</h2>
            <p className={classes.description}>{data[0].description}</p>*/   /*}
          </div>
   
      </div>
  )
};*/


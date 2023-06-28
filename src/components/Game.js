import React, { useState } from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
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
            <p className={classes.description}>{data[0].description}</p>*/}
          </div>
   
      </div>
  )
};

export default Game;
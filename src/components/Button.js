import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    myButton: {
        cursor: 'pointer',
        margin: '10px',
        textAlign: 'center',
        color: '#9eebce',
        fontSize: '1rem',
        button: 'btn',
        backgroundColor: '#05375f',
        display: 'inline-block',
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
})

const Button = ({ label }) => {
    const classes = useStyles();
    return(
    <button className={classes.myButton}>
        {label}
    </button>
  )
};

export default Button;
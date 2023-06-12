import React from "react";
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    myBox: {
        textAlign: 'center',
        backgroundColor: '#9eebce',
        display: 'inline-block',
        borderRadius: '0.5rem',
        padding: '1rem',
        margin: '0.5rem',
        borderWidth: '0.25rem',
        boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.4)',
        },
      },
})

const Card = ({ name, email, id}) => {
    const classes = useStyles()
    return (
        <div className={classes.myBox}>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2> {name} </h2>
                <p> {email} </p>
            </div>
        </div>
    );
}

export default Card;
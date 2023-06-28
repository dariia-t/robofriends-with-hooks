import React from "react";
import {createUseStyles} from 'react-jss';
import {Link} from 'react-router-dom';

const useStyles = createUseStyles({
    myBox: {
        textAlign: 'center',
        backgroundColor: '#9eebce',
        display: 'inline-block',
        borderRadius: '0.5rem',
        padding: '1rem',
        margin: '2rem',
        borderWidth: '0.25rem',
        boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.4)',
        },
    },
    myLink: {
        textDecoration: 'none',
        color: 'black',
    },
})

const Card = ({ name, email, id, type}) => {
    const classes = useStyles()
    const points = [100, 120, 130, 140, 150, 160, 170, 180, 190, 200];
    if (type==="default"){
        return (
            <Link to= {`/details/${id}`}>
                <div className={classes.myBox}>
                    <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
                    <div className={classes.myLink}>
                        <h2> {name} </h2>
                        <h3> {points[id-1]+" XP"} </h3>
                    </div>
                </div>
            </Link>
        );
    }else{
        return (
            <Link to= {`/options/${id}`}>
                <div className={classes.myBox}>
                    <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
                    <div className={classes.myLink}>
                        <h2> {name} </h2>
                        <h3> {points[id-1]+" XP"} </h3>
                    </div>
                </div>
            </Link>
        );
    }
}

export default Card;
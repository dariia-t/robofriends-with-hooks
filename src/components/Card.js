import React, {useContext} from "react";
import {createUseStyles} from 'react-jss';
import {Link} from 'react-router-dom';
import { RobotContext } from "../containers/RobotContext";

const useStyles = createUseStyles({
    myBox: {
        position: 'relative',
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
    closeButton: {
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        background: '#05375f',
        borderRadius: '0.2rem',
        color: '#9eebce',
        border: 'none',
        fontSize: '1rem',
        cursor: 'pointer',
    },
    myLink: {
        textDecoration: 'none',
        color: 'black',
    },
})

const Card = ({ name, id, type}) => {

    const { robots, handleRobots } = useContext(RobotContext)
    const classes = useStyles()

    const handleClick = (event) => {
        event.preventDefault();
        const selectedRobot = robots.defaultArray.find((robot) => robot.id === parseInt(id, 10))

        if (!selectedRobot) {
            console.log('Selected robot not found')
            return
        }

        const updatedOptions = [...robots.options, selectedRobot]
        const updatedInitial = robots.defaultArray.filter(
            (robot) => robot.id !== selectedRobot.id
        )

        handleRobots(updatedInitial, 'default')
        console.log('length def', updatedInitial.length)
        handleRobots(updatedOptions, 'option')
  
    }

    const points = [100, 120, 130, 140, 150, 160, 170, 180, 190, 200];
    if (type==="default"){
        return (
            <Link to= {`/details/${id}`}>
                <div className={classes.myBox}>
                    <button className={classes.closeButton} onClick={handleClick}>X</button>
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
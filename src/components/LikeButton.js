import React, { useContext } from 'react'
import { RobotContext } from '../containers/RobotContext'
import { createUseStyles } from 'react-jss';
import Button from './Button';

const useStyles = createUseStyles({
  likeButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
  },
  likeButton: {
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#05375f',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    padding: '10px 20px',
    border: '2px solid #05375f',
    '&:hover': {
      color: '#05375f',
      backgroundColor: '#CC9DF5',
    },
    '&.liked': {
      color: '#05375f',
      borderColor: '#05375f',
    },
  },
});

function LikeButton({id, type}) {
  const classes = useStyles();
  const { robots, handleRobots } = useContext(RobotContext)

  const handleLike = () => {
    let selectedRobot = null;
    if(type==='option'){
      selectedRobot = robots.options.find((robot) => robot.id === parseInt(id, 10))
    } else{
      selectedRobot = robots.defaultArray.find((robot) => robot.id === parseInt(id, 10))
    }

    if (!selectedRobot) {
      console.log('Selected robot not found')
      return
    }

    const updatedInitial = [...robots.liked, selectedRobot]

    handleRobots(updatedInitial, 'liked')
  };

  return (
    <div className={classes.likeButtonContainer}>
      <Button label={'Like'} style={{color: 'white', backgroundColor: '#770737'}} onClick={handleLike}/>
    </div>
  );
}

export default LikeButton;
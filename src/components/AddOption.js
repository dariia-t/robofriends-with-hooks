import React, { useContext } from 'react'
import { RobotContext } from '../containers/RobotContext'

import CardDetails from './CardDetails'
import { createUseStyles } from 'react-jss'
import { useParams, useNavigate } from 'react-router-dom'

const useStyles = createUseStyles({
  myButton: {
    cursor: 'pointer',
    marginTop: '5.5rem',
    marginBottom: '2rem',
    marginLeft: '1rem',
    marginRight: '3rem',
    textAlign: 'center',
    color: '#05375f',
    fontSize: '2rem',
    button: 'btn',
    width: '40%',
    backgroundColor: '#0ccac4',
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

const AddOption = () => {
  const { id } = useParams()
  const { robots, handleRobots } = useContext(RobotContext)
  const navigate = useNavigate()
  const classes = useStyles()

  const handleClick = () => {
    const selectedRobot = robots.options.find((robot) => robot.id === parseInt(id, 10))

    if (!selectedRobot) {
      console.log('Selected robot not found')
      return
    }

    const updatedInitial = [...robots.defaultArray, selectedRobot]
    const updatedOptions = robots.options.filter(
      (robot) => robot.id !== selectedRobot.id
    )

    handleRobots(updatedInitial, 'default')
    console.log('length def', updatedInitial.length)
    handleRobots(updatedOptions, 'option')
    navigate('/')
  }

  return (
    <div style={{ display: 'flex' }}>
      <CardDetails />
      <button className={classes.myButton} onClick={handleClick}>
        {'Add the robot'}
      </button>
    </div>
  )
}

export default AddOption

import React, { useContext } from 'react'
import { RobotContext } from '../containers/RobotContext'

import CardDetails from './CardDetails'
import { useParams, useNavigate } from 'react-router-dom'
import Button from './Button'

const AddOption = () => {
  const { id } = useParams()
  const { robots, handleRobots } = useContext(RobotContext)
  const navigate = useNavigate()

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
    navigate('/home')
  }

  return (
    <div style={{ display: 'flex' }}>
        <CardDetails type={'option'}/>
        <Button label={'Add me'} onClick={handleClick} style={{backgroundColor:'#0ccac4', color: '#05375f',  width: '20rem', height: '53.3rem', marginTop: '5.3rem', marginRight: '2rem'}} />
    </div>
  )
}

export default AddOption

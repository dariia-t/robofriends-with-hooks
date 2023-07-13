import React, { useState, useContext, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import { createUseStyles } from 'react-jss'
import { RobotContext } from './RobotContext.js'

import CardDetails from '../components/CardDetails.js'
import AddOption from '../components/AddOption.js'
import AddHome from '../components/AddHome.js'
import Home from './Home.js'
import Game from '../components/Game.js'
import Cinema from '../components/Cinema.js'
import LoginPage from '../components/LoginPage'
import SignupPage from '../components/SignupPage'
import LikedPage from '../components/LikedPage'

// react router tutorial https://reactrouter.com/en/main/start/tutorial
// https://www.youtube.com/watch?v=aZGzwEjZrXc

const useStyles = createUseStyles({
  myBox: {
    textAlign: 'center',
  },
  myBar: {
    padding: '0.05rem',
    margin: '2rem',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  error: {
    padding: '1rem',
    fontSize: '2rem',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0ccac4',
  },
})

function App() {
  const classes = useStyles()
  const [searchfield, setSearchfield] = useState('') // SearchField
  const [nameExists, setNameExists] = useState(true)
  const { robots, handleRobots } = useContext(RobotContext)

  useMemo(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        const defaultArray = users.slice(0, 3)
        const options = users.slice(4, users.length)
        handleRobots(defaultArray, 'default')
        handleRobots(options, 'option')
      })
    // eslint-disable-next-line
  }, [])

  const onSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase()
    setSearchfield(event.target.value)
    const nameExists = robots.defaultArray?.some((robot) =>
      robot.name.toLowerCase().includes(searchValue)
    )
    setNameExists(nameExists)
  }

  const filteredRobots = robots.defaultArray?.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  if (!robots.defaultArray?.length) {
    return <h1 className={classes.myBox}>Loading</h1>
  } else {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path ='/home'
            element={
              <Home
                filteredRobots={filteredRobots}
                onSearchChange={onSearchChange}
                searchedName={searchfield}
                nameExists={nameExists}
              />
            }
          />
          <Route path='/details/:id' element={<CardDetails />} />
          <Route
            path='/options/:id'
            element={
              <AddOption/>
            }
          />
          <Route path='/add' element={<AddHome />} />
          <Route path='/game' element={<Game />} />
          <Route path='/movies' element={<Cinema />} />
          <Route path='/liked' element={<LikedPage />} />
        </Routes>
      </div>
    )
  }
}

export default App

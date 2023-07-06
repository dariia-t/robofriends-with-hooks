import React, { createContext, useState } from 'react'

export const RobotContext = createContext()

export const RobotProvider = ({ children }) => {
  const [robots, setRobots] = useState({ defaultArray: [], options: [] })

 /*  const updateDefaultArray = (updatedDefaultArray) => {
    setRobots((prevRobots) => ({
      ...prevRobots,
      defaultArray: updatedDefaultArray,
    }))
  }

 const updateOptions = (updatedOptions) => {
    setRobots((prevRobots) => ({
      ...prevRobots,
      options: updatedOptions,
    }))
  } */

  const handleRobots = (item, type) => {
    setRobots((prevRobots) => ({
      options: type === 'option' ? item : prevRobots.options,
      defaultArray: type === 'default' ? item : prevRobots.defaultArray,
    }))
  }

  return (
    <RobotContext.Provider
      value={{ robots, handleRobots }}> {children}
    </RobotContext.Provider>
  )
}

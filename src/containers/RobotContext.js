import React, { createContext, useState } from "react";

export const RobotContext = createContext();

export const RobotProvider = ({ children }) => {
    const [robots, setRobots] = useState({ defaultArray: [], options: [] });

    const updateDefaultArray = (updatedDefaultArray) => {
        setRobots((prevRobots) => ({
        ...prevRobots,
        defaultArray: updatedDefaultArray,
        }));
    };

    const updateOptions = (updatedOptions) => {
        setRobots((prevRobots) => ({
        ...prevRobots,
        options: updatedOptions,
        }));
    };


    return (
        <RobotContext.Provider value={{ robots, updateDefaultArray, updateOptions }}>
        {children}
        </RobotContext.Provider>
    );
};
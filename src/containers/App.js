import React, { useState, useEffect } from "react";
import CardList from "../components/CardList.js";
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundry.js";
import SearchBox from '../components/SearchBox.js';
import './App.css'
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    myBox: {
        textAlign: 'center',
    },
})

function App() {
    const classes = useStyles()
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users => { setRobots( users)});
    },[])
    
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    if (!robots.length){
        return <h1 className={classes.myBox}>Loading</h1>
    } else {
        return (
            <div className={classes.myBox}> 
                <h1 style={{ fontSize: '3rem' }}>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    } 
}

export default App;
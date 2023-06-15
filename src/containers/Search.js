// importing hooks 
import React, { useState, useEffect } from "react";
import CardList from "../components/CardList.js";
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundry.js";
import SearchBox from '../components/SearchBox.js';
import './Search.css';
import {createUseStyles} from 'react-jss';
// react router tutorial https://reactrouter.com/en/main/start/tutorial
// https://www.youtube.com/watch?v=aZGzwEjZrXc


const useStyles = createUseStyles({
    myBox: {
        textAlign: 'center',
    },
    error: {
        padding: '1rem',
        fontSize: '2rem',
        textAlign: 'center',
        fontWeight:'bold',
        color: '#0ccac4',
    },
})

function Search() {
    const classes = useStyles();
    // This creates a state variable robots and a function setRobots to update it
    const [robots, setRobots] = useState([]);
    // This creates a state variable robots and a function setRobots to update it
//    const [options, setOptions] = useState([]);
    // This creates a state variable searchfield and a function setSearchfield to update it
    const [searchfield, setSearchfield] = useState('');
    const [nameExists, setNameExists] = useState(true);
    const [searchedName, setSearchedName] = useState('');

    // after component has rendered perform the effect to set the robots displayed
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users') // api provides users data
        .then(response=>response.json()) // convert to json 
        .then(users => { 
            const firstThreeUsers = users.slice(0, 3); // Extract the first three users
            setRobots(firstThreeUsers);
        });
    },[]) // empty array to ensure it runs only ones (similar to componentDidMount)
 
/*    // after component has rendered perform the effect to set the rbobots that can be added 
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users') 
        .then(response=>response.json()) 
        .then(users => { 
            const fiveOptions = users.slice(3, 8); 
            setOptions(fiveOptions);
        });
    },[]) 
*/
    const onSearchChange = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchfield(searchValue);
        setSearchedName(event.target.value);
        const nameExists = robots.some((robot) =>
          robot.name.toLowerCase().includes(searchValue)
        );
        setNameExists(nameExists);
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
                            {!nameExists && <div className={classes.error} > Can't find {searchedName}</div>}
                                <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
        );
    } 
}

export default Search;
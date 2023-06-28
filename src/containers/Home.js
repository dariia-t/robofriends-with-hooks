import React from "react";
import {createUseStyles} from 'react-jss';

import { Link } from "react-router-dom";
import CardList from "../components/CardList.js";
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundry.js";
import SearchBox from '../components/SearchBox.js';


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
        fontWeight:'bold',
        color: '#0ccac4',
    },
    myButton: {
        cursor: 'pointer',
        margin: '10px',
        textAlign: 'center',
        color: '#9eebce',
        fontSize: '1rem',
        button: 'btn',
        backgroundColor: '#05375f',
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

const Home = ({filteredRobots, onSearchChange, searchedName, nameExists}) => {
    const classes = useStyles();

    return(
        <div className={classes.myBox}> 
            <h1 style={{ fontSize: '3rem' }}>RoboFriends</h1>
            <div className={classes.myBar}>
                <SearchBox searchChange={onSearchChange} title={'search robots'}/> 
                <Link to= {`/add`}>
                    <button className={classes.myButton}>Add more of us</button>
                </Link>
                <Link to= {`/game`}>
                    <button className={classes.myButton}>Play a game</button>
                </Link>
                {/*
                <Link to={{ 
                    pathname: `/game/${robots.options[0].id}`, 
                    state: {
                        name: robots.options[0].name,
                        email: robots.options[0].email,
                    },
                }}> <button className={classes.myButton}>Play a game</button>
                </Link>
            */}
            </div>
            <Scroll>
                <ErrorBoundary>
                    {!nameExists && <div className={classes.error} > Can't find {searchedName}</div>}
                        <CardList robots={filteredRobots} type='default'/>
                </ErrorBoundary>
            </Scroll>
        </div>
    )
};

export default Home;



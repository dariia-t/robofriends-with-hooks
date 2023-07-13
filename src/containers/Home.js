import React from "react";
import {createUseStyles} from 'react-jss';

import { Link, useNavigate } from "react-router-dom";
import CardList from "../components/CardList.js";
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundry.js";
import SearchBox from '../components/SearchBox.js';
//import { myButtonStyle } from "../style.js";
import LoginPage from "../components/LoginPage.js";
import Button from "../components/Button.js";

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
})

const Home = ({filteredRobots, onSearchChange, searchedName, nameExists}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const loggedInUserName = localStorage.getItem('loggedInUserName');
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    
    const logout = () =>{
        if (loggedInUserEmail) {
          // Remove the specific user's authentication information from local storage
          localStorage.removeItem('loggedInUserEmail');
          localStorage.removeItem('loggedInUserName');
          
          navigate('/');
        }
        
    };
    if (loggedInUserEmail){
        return(
            <div className={classes.myBox}> 
                <h1 style={{ fontSize: '3rem' }}>RoboFriends</h1>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h2 style={{ fontSize: '1.5rem' }}>Welcome, {loggedInUserName}</h2>
                    <Button label={'Logout'} style={{backgroundColor: '#0ccac4', color: '#05375f'}} onClick={logout}/>
                </div>
                <div className={classes.myBar}>
                    <SearchBox searchChange={onSearchChange} title={'search robots'}/> 
                    <Link to= {`/add`}>
                        <Button label={'Add more of us'} style={{color: '#0ccac4', backgroundColor: '#05375f'}}/>
                    </Link>
                    <Link to= {`/game`}>
                        <Button label={'Play a game'} style={{color: '#0ccac4', backgroundColor: '#05375f'}}/>
                    </Link>
                    <Link to= {`/movies`}>
                        <Button label={'Robocinema'} style={{color: '#0ccac4', backgroundColor: '#05375f'}}/>
                    </Link>
                    <Link to= {`/liked`}>
                        <Button label={'Liked'} style={{color: '#0ccac4', backgroundColor: '#05375f'}}/>
                    </Link>
                </div>
                <Scroll>
                    <ErrorBoundary>
                        {!nameExists && <div className={classes.error} > Can't find {searchedName}</div>}
                            <CardList robots={filteredRobots} type='default'/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
    else{
        return(
            <LoginPage/>
        )
    }
};


export default Home;



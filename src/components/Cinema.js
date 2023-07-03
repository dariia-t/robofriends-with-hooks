import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2rem'
      },
      screen: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '40px',
      },
})

export default function Cinema() {
    const classes = useStyles();
    return(
        <div>
            <h1>RoboCinema</h1>
            <div className={classes.container}>
                <div className={classes.screen}>
                        <YoutubeEmbed link='https://www.youtube.com/embed/wU9Vrzi0LEM'/>
                        <YoutubeEmbed link='https://www.youtube.com/embed/kForca-Bdb8'/>
                        <YoutubeEmbed link='https://www.youtube.com/embed/7GJiy1oN8Y4'/>
                        <YoutubeEmbed link='https://www.youtube.com/embed/bu7LTiqpU18'/>
                </div>  
            </div>  
        </div>
    );
}
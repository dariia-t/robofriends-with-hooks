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
                        <YoutubeEmbed link='https://www.youtube.com/embed/QHH3iSeDBLo'/>
                        <YoutubeEmbed link='https://www.youtube.com/embed/iiMFRMoxxEI'/>
                        <YoutubeEmbed link='https://www.youtube.com/embed/d8szceStqZI'/>
                        <YoutubeEmbed link='https://www.youtube.com/embed/0hxp5HqP1RU'/>
                </div>  
            </div>  
        </div>
    );
}
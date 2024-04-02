import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import robotImage from '../robot.png'

const useStyles = createUseStyles({
    container: {
        position: 'relative',
        textAlign: 'center',
        display: 'inline-block',
        marginBottom: '10px',
        justifyContent: 'center',
    },
    image: {
        height: '100px',
        width: '100px',
    },
    heading: {
        marginTop: '6px',
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white',
    },
    paragraph: {
        marginTop: '1px',
        textAlign: 'center',
        fontSize: '1rem',
        color: 'white',
    },
    link: {
        fontWeight: 'medium',
    },
});

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl = '#',
    }) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
        <div>
            <img
                alt=""
                className={classes.image}
                src={robotImage}

            />
        </div>
        <h2 className={classes.heading}>{heading}</h2>
        <p className={classes.paragraph}>
            {paragraph}{' '}
            <Link to={linkUrl} className={classes.link}>
            {linkName}
            </Link>
        </p>
        </div>
    );
}

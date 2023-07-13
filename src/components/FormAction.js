import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '21.2rem',
        marginTop: '2rem',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '0.375rem',
        fontSize: '0.875rem',
        fontWeight: 'medium',
        color: 'black',
        backgroundColor: '#0ccac4',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#f4b135',
        },
        '&:focus': {
            outline: 'none',
            ring: '2px',
            ringOffset: '2px',
            ringColor: '#6B46C1',
        },
        '&.group': {
            position: 'relative',
        },
    },
});

export default function FormAction({ handleSubmit, type = 'Button', action = 'submit', text}) {
    const classes = useStyles();
    return (
        <>
        {type === 'Button' ? (
                <button
                    type={action}
                    className={classes.button}
                    onClick={handleSubmit}
                >
                {text}
                </button>
        ) : (
            <></>
        )}
        </>
    );
}

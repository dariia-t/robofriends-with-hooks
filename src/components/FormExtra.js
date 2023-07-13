import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rememberMe: {
        display: 'flex',
        alignItems: 'center',
    },
    checkbox: {
        height: '1rem',
        width: '1rem',
        color: '#6B46C1',
        focusRing: '0 0 0 3px rgba(107, 70, 193, 0.5)',
        border: '1px solid #D1D5DB',
        borderRadius: '0.25rem',
    },
    rememberMeLabel: {
        marginLeft: '0.5rem',
        fontSize: '0.875rem',
        color: 'white',
    },
    forgotPassword: {
        fontSize: '0.875rem',
        color: '#6bc8e2',
        '&:hover': {
        color: '#805AD5',
        },
    },
});

export default function FormExtra() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
        <div className={classes.rememberMe}>
            <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className={classes.checkbox}
            />
            <label htmlFor="remember-me" className={classes.rememberMeLabel}>
            Remember me
            </label>
        </div>

        <div className={classes.textSm}>
            <a href="https://www.mycplus.com/featured-articles/five-reasons-why-we-often-forget-passwords/" className={classes.forgotPassword}>
            Forgot your password?
            </a>
        </div>
        </div>
    );
}
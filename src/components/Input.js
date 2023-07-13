import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        marginTop: '5px',
    },
    label: {
        display: 'none',
    },
    input: {
        borderRadius: '0.375rem',
        appearance: 'none',
        width: '100%',
        padding: '0.75rem 0.5rem',
        border: '1px solid #D1D5DB',
        color: '#1F2937',
        outline: 'none',
        '&::placeholder': {
        color: '#9CA3AF',
        },
        '&:focus': {
        outline: '2px solid #6B46C1',
        borderColor: '#6B46C1',
        zIndex: '10',
        },
        '&$sm': {
        fontSize: '0.875rem',
        },
    },
    sm: {}, 
});

export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    customClass,
    }) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
        <label htmlFor={labelFor} className={classes.label}>
            {labelText}
        </label>
        <input
            onChange={handleChange}
            value={value}
            id={id}
            name={name}
            type={type}
            required={isRequired}
            className={`${classes.input} ${customClass}`}
            placeholder={placeholder}
        />
        </div>
    );
}
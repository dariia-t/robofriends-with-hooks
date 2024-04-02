import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { signupFields } from './formFields';
import FormAction from './FormAction';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

const useStyles = createUseStyles({
    form: {
        marginTop: '8px',
        flexDirection: 'column',
        textAlign: 'center',
        width: '20rem',
    },
    field: {
        marginBottom: '0.75rem', 
    },
    error: {
        backgroundColor: '#D2042D',
        color: 'white',
        marginTop: '0.5rem',
        width: '20.5rem',
        padding: '0.3rem',
        borderRadius: '0.375rem',
    },
});



export default function Signup() {
    const fields = signupFields;
    let fieldsState = {};
    fields.forEach((field) => (fieldsState[field.id] = ''));

    
    const [signupState, setSignupState] = useState(fieldsState);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [allFieldsFilled, setAllFieldsFilled] = useState(true);
    
    const navigate = useNavigate();
    const classes = useStyles();

    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (signupState.password === signupState['confirm-password']) {
            if (validateAllFields()) {
                console.log(signupState);
                createAccount();
            } else {
                setAllFieldsFilled(false);
            }
        } else {
            setPasswordMatch(false);
        }
    };

    const validateAllFields = () => {
        for (const field of fields) {
          if (field.isRequired && !signupState[field.id]) {
            return false;
          }
        }
        return true;
    };

    const createAccount = () => {
        const { username, email, password } = signupState;
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push({username, email, password});
        localStorage.setItem('users', JSON.stringify(users));

        alert("Account created successfully");
        navigate('/');
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
        <div>
            {fields.map((field) => (
            <Input
                key={field.id}
                handleChange={handleChange}
                value={signupState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
                customClass={classes.field}
            />
            ))}
        {!passwordMatch && (
          <p className={classes.error}>Password and confirm password do not match</p>
        )}
        {!allFieldsFilled && (
          <p className={classes.error}>Please fill out all required fields</p>
        )}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>
        </form>
    );
}
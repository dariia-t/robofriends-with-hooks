import React, { useState } from 'react';
import { loginFields } from './formFields';
import Input from './Input';
import FormAction from './FormAction';
import FormExtra from './FormExtra';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

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



export default function Login() {
    const fields = loginFields;
    let fieldsState = {};
    fields.forEach((field) => (fieldsState[field.id] = ''));

    const [loginState, setLoginState] = useState(fieldsState);
    const [allFieldsFilled, setAllFieldsFilled] = useState(true);
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const classes = useStyles();
    const navigate = useNavigate();

    const handleChange = (e) => setLoginState({ ...loginState, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateAllFields()) {
            console.log(loginState);
            authenticateUser();
        } else {
            setAllFieldsFilled(false);
        }
    };

  const authenticateUser = () => {
    const { email, password } = loginState;
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
        localStorage.setItem('loggedInUserEmail', user.email);
        localStorage.setItem('loggedInUserName', user.username);
        alert('Login successful');
        navigate('/home');
    } else {
        alert('Please enter valid credentials');
    }
  };

  const validateAllFields = () => {
    for (const field of fields) {
      if (field.isRequired && !loginState[field.id]) {
        return false;
      }
    }
    return true;
  };

  return (
    <form className={classes.form}>
      <div>
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
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
        {!allFieldsFilled && <p className={classes.error}>Please fill out all required fields</p>}
      </div>
      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
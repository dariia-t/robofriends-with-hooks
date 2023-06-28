import React from "react";
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    searchBox: {
        padding: '0.5rem',
    },
    input: {
        padding: '1rem',
        border: '1px solid green',
        backgroundColor: 'lightblue',
        '&::placeholder': {
            fontSize: '1.1rem',
        },
    },
})

const SearchBox = ({searchfield, searchChange, title}) => {
    const classes = useStyles()
    return (
        <div className={classes.searchBox}>
            <input 
                className={classes.input}
                type='search' 
                placeholder={title} 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
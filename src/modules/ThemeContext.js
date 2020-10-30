import React from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
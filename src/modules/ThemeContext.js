import React from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
    let theme = localStorage.getItem('theme') || "dark";
    
    return (
        <ThemeContext.Provider value={theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
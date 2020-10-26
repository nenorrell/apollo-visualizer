import React, { useEffect } from "react";
import "./styles/globals.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import {AlertContext, AlertProvider} from "./modules/AlertContext"
import {ConfigContext, ConfigProvider} from "./modules/ConfigContext"
import {ThemeContext, ThemeProvider} from "./modules/ThemeContext"

export const App = ()=>{
    let theme = localStorage.getItem('theme') || "dark";
    const [currentTheme, changeTheme] = React.useState(null);
    useEffect(() => {
        document.body.className = `theme-${currentTheme || theme}-primary full-height robotic-font`;
    });
    
    return(
        <ConfigProvider>
            <ThemeProvider theme={currentTheme || theme}>
                <AlertProvider>
                    <Navbar currentTheme={currentTheme || theme} changeTheme={changeTheme} />
                    <Home />
                </AlertProvider>
            </ThemeProvider>
        </ConfigProvider>
    )
}
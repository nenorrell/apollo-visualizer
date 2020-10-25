import React, { useEffect } from "react";
import "./styles/globals.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import {AlertContext, AlertProvider} from "./modules/AlertContext"
import {ConfigContext, ConfigProvider} from "./modules/ConfigContext"
import {ThemeContext, ThemeProvider} from "./modules/ThemeContext"

export const App = ()=>{
    const themeContext = React.useContext(ThemeContext);
    useEffect(() => {
        document.body.className = `theme-${themeContext}-primary full-height robotic-font`;
    });
    
    return(
        <ConfigProvider>
            <ThemeProvider>
                <AlertProvider>
                    <Navbar />
                    <Home />
                </AlertProvider>
            </ThemeProvider>
        </ConfigProvider>
    )
}
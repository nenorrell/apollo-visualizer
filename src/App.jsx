import React, { useEffect } from "react";
import "./styles/globals.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import {AlertContext, AlertProvider} from "./modules/AlertContext"
import {ConfigContext, ConfigProvider} from "./modules/ConfigContext"

export const App = ()=>{
    useEffect(() => {
        document.body.className = 'theme-dark-primary full-height robotic-font';
    });
    
    return(
        <ConfigProvider>
            <AlertProvider>
                <Navbar />
                <Home />
            </AlertProvider>
        </ConfigProvider>
    )
}
import React from "react";
import './Navbar.scss';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faPalette } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({currentTheme, changeTheme})=>{
    let themes = [
        "Dark",
        "Dark-fire"
    ]

    return (
        <nav className={`navbar theme-${currentTheme}-nav`} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <h3 className={`theme-${currentTheme}-text-color is-size-3`}>
                        <FontAwesomeIcon icon={faUserAstronaut}/> Apollo Visualizer
                    </h3>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className={`theme-${currentTheme}-secondary-select-override`}>
                        <div className="control has-icons-left">
                            <div className="select is-medium is-rounded" onChange={(e)=>{
                                let val = e.target.value;
                                localStorage.setItem("theme", val)
                                changeTheme(val);
                            }}>
                                <select value={currentTheme} className={`theme-${currentTheme}-primary theme-${currentTheme}-secondary-color theme-${currentTheme}-secondary-border-color thin-border`} readOnly>
                                    {
                                        themes.map((theme) =>
                                            <option key={uuidv4()} value={theme.toLowerCase()}>{theme}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <span className="icon is-left">
                                <FontAwesomeIcon 
                                    className={`theme-${currentTheme}-secondary-color`}
                                    icon={faPalette}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
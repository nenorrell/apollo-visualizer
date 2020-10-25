import React from "react";
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../modules/ThemeContext";

export const Navbar = ({displayHelpModal})=>{
    const themeContext = React.useContext(ThemeContext);
    return (
        <nav className={`navbar theme-${themeContext}-nav`} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <h3 className={`theme-${themeContext}-text-color is-size-3`}>
                        <FontAwesomeIcon icon={icons.faUserAstronaut}/> Apollo Visualizer
                    </h3>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item" onClick={()=>{
                    displayHelpModal(true);
                }}>
                </div>
            </div>
        </nav>
    );
}
import React from "react";
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({displayHelpModal})=>{
    return (
        <nav className="navbar theme-dark-nav" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <h3 className="theme-dark-light-color is-size-3">
                        <FontAwesomeIcon icon={icons.faUserAstronaut}/> Apollo Visualizer
                    </h3>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item" onClick={()=>{
                    displayHelpModal(true);
                }}>
                    {/* <p className="theme-dark-light-color issues"><FontAwesomeIcon icon={icons.faInfoCircle}/> Having Issues?</p> */}
                </div>
            </div>
        </nav>
    );
}
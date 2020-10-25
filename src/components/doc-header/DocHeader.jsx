import './DocHeader.scss';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from '../../modules/ThemeContext';

export const DocHeader = ({item, detailsExpanded, expandToggle})=>{
    const themeContext = React.useContext(ThemeContext);
    
    let authRequired = false;
    if(item.policies && item.policies.includes("isAuthenticated")){
        authRequired = true;
    }
    
    return (
        <div className="columns is-mobile clickable" onClick={()=>expandToggle(!detailsExpanded)}>
            <div className="column is-2">
                <div className="has-text-left">
                    <span className={`method ${getMethodStyle(item.method)}`}>{item.method.toUpperCase()}</span>
                </div>
            </div>
            <div className="column is-9-desktop is-7-touch">
                <div className="has-text-left">
                    <p className={`theme-${themeContext}-text-color`} dangerouslySetInnerHTML={formatPathParams(item.path, item.pathParams)}></p>
                </div>
            </div>
            <div className="column is-1-desktop is-3-touch">
                <div className="has-text-right">
                    {
                        authRequired?(
                            <span className="authentication-icon">
                                <FontAwesomeIcon icon={icons.faLock}/>
                            </span>
                        )
                        :(null)
                    }
                    {
                        detailsExpanded?(
                            <FontAwesomeIcon icon={icons.faChevronDown}/>
                        )
                        :(
                            <FontAwesomeIcon icon={icons.faChevronRight}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

const getMethodStyle = (method)=>{
    const themeContext = React.useContext(ThemeContext);
    let style = "";
    switch(method.toUpperCase()){
        case "POST":
            style = "info";
            break;
        
        case "GET":
            style = "success";
            break;
        
        case "DELETE":
            style = "danger";
            break;
        
        case "PUT":
            style = "warning";
            break;
    }
    return `theme-${themeContext}-${style}-color`;
}

const formatPathParams = (path, params)=>{
    const themeContext = React.useContext(ThemeContext);
    if(params){
        params.forEach((param)=>{
            path = path.replace(`:${param.name}`, `<span class="theme-${themeContext}-secondary-color">{${param.name}}</span>`);
        });
    }
    return {__html: `${path}`};
}
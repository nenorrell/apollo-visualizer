import './DocHeader.scss';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from "@fortawesome/free-solid-svg-icons";

export const DocHeader = ({item, detailsExpanded, expandToggle})=>{
    let authRequired = false;
    if(item.policies && item.policies.includes("isAuthenticated")){
        authRequired = true;
    }
    
    return (
        <div className="columns is-mobile clickable" onClick={()=>expandToggle(!detailsExpanded)}>
            <div className="column is-2">
                <div className="has-text-left">
                    <span className={`method method-${item.method}`}>{item.method.toUpperCase()}</span>
                </div>
            </div>
            <div className="column is-9-desktop is-7-touch">
                <div className="has-text-left">
                    <p className="theme-dark-light-color" dangerouslySetInnerHTML={formatPathParams(item.path, item.pathParams)}></p>
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

const formatPathParams = (path, params)=>{
    if(params){
        params.forEach((param)=>{
            path = path.replace(`:${param.name}`, `<span class="path-param">{${param.name}}</span>`);
        });
    }
    return {__html: `${path}`};
}
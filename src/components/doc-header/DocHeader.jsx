import './DocHeader.scss';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from "@fortawesome/free-solid-svg-icons";

export const DocHeader = ({item, detailsExpanded, expandToggle})=>{
    return (
        <div className="columns is-mobile clickable" onClick={()=>expandToggle(!detailsExpanded)}>
            <div className="column is-2">
                <div className="has-text-left">
                    <span className={`method ${item.method}`}>{item.method.toUpperCase()}</span>
                </div>
            </div>
            <div className="column is-9">
                <div className="has-text-left">
                    <p className="theme-dark-light-color" dangerouslySetInnerHTML={formatPathParams(item.path, item.pathParams)}></p>
                </div>
            </div>
            <div className="column is-1">
                <div className="has-text-center">
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
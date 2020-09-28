import './DocRow.scss';
import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import * as icons from "@fortawesome/free-solid-svg-icons";
import {DocHeader} from "../doc-header/DocHeader";
import {DocDetails} from "../doc-details/DocDetails";

export const DocRow = ({item})=>{
    const [expandDetails, toggleExpandDetails] = useState(false);

    return (
        <div className="doc-row theme-dark-accent">
            <DocHeader item={item} detailsExpanded={expandDetails} expandToggle={toggleExpandDetails}/>
            {
                expandDetails?
                (<DocDetails item={item} show={expandDetails}/>)
                :(null)
            }
        </div>
    )
}
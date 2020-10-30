import './DocRow.scss';
import React, { useState } from "react";
import {DocHeader} from "../doc-header/DocHeader";
import {DocDetails} from "../doc-details/DocDetails";
import { ThemeContext } from '../../modules/ThemeContext';

export const DocRow = ({item})=>{
    const [expandDetails, toggleExpandDetails] = useState(false);
    const themeContext = React.useContext(ThemeContext);
    return (
        <div className={`doc-row theme-${themeContext}-accent`}>
            <DocHeader item={item} detailsExpanded={expandDetails} expandToggle={toggleExpandDetails}/>
            {
                expandDetails?
                (<DocDetails item={item} show={expandDetails}/>)
                :(null)
            }
        </div>
    )
}
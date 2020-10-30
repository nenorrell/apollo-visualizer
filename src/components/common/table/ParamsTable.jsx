import './ParamsTable.scss';
import React from "react";
import { Table } from "./Table";
import { ThemeContext } from '../../../modules/ThemeContext';

export const ParamsTable = ({sectionName, headers, tableItems})=>{
    const themeContext = React.useContext(ThemeContext);
    return(
        <div className="param-section">
            <div className="columns is-mobile">
                <div className="column">
                    <h6 className={`tag theme-${themeContext}-secondary is-size-6`}>{sectionName}</h6>
                </div>
            </div>
            <div className="columns is-mobile">
                <div className="column scroll-x">
                    <Table headers={headers} tableItems={tableItems}/>
                </div>
            </div>
        </div>
    )
}
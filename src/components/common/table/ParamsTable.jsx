import './ParamsTable.scss';
import React from "react";
import { Table } from "./Table";

export const ParamsTable = ({sectionName, headers, tableItems})=>{
    return(
        <div className="param-section">
            <div className="columns is-mobile">
                <div className="column scroll-x">
                    <h6 className="tag theme-dark-secondary is-size-6">{sectionName}</h6>
                </div>
            </div>
            <div className="columns is-mobile">
                <div className="column">
                    <Table headers={headers} tableItems={tableItems}/>
                </div>
            </div>
        </div>
    )
}
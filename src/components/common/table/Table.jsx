import './Table.scss';
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { DocParam } from "../../doc-param/DocParam";

export const Table = ({headers, tableItems}) => {
    return (
        <table className="table theme-dark-accent-2">
            <thead>
                <tr>
                    {
                        headers.map((header) =>
                            <th key={uuidv4()} className="theme-dark-light-color">{header}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    tableItems.map((param) =>
                        <DocParam key={uuidv4()} param={param} />
                    )
                }
            </tbody>
        </table>
    )
}
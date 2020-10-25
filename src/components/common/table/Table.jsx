import './Table.scss';
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { DocParam } from "../../doc-param/DocParam";
import { ThemeContext } from '../../../modules/ThemeContext';

export const Table = ({headers, tableItems}) => {
    const themeContext = React.useContext(ThemeContext);
    return (
        <table className={`table theme-${themeContext}-accent-2`}>
            <thead>
                <tr>
                    {
                        headers.map((header) =>
                            <th key={uuidv4()} className={`theme-${themeContext}-text-color`}>{header}</th>
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
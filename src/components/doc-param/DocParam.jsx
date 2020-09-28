import './DocParam.scss';
import React from "react";

export const DocParam = ({ param }) => {
    return (
        <tr>
            <td>{param.name}</td>
            <td>{param.type}</td>
            <td>{param.description}</td>
            <td>{param.required.toString()}</td>
        </tr>
    )
}

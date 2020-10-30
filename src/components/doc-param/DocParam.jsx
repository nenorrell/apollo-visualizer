import './DocParam.scss';
import React from "react";
import { v4 as uuidv4 } from 'uuid';

export const DocParam = ({ param }) => {
    return (
        <tr>
            <td>{param.name}</td>
            <td>{param.type}</td>
            {
                param.enumValues?(
                    <td>{param.description}
                        <ul>
                            <li><b>Possible Values:</b></li>
                        {
                            param.enumValues.map((value)=>
                                <li key={uuidv4()}>- <i>{value}</i></li>
                            )
                        }
                        </ul>
                    </td>
                )
                :(
                    <td>{param.description}</td>
                )                
            }
            <td>{param.required.toString()}</td>
        </tr>
    )
}

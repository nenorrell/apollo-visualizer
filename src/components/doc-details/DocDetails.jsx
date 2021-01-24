import './DocDetails.scss';
import React from "react";
import { ParamsTable } from '../common/table/ParamsTable';
import { ThemeContext } from '../../modules/ThemeContext';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const DocDetails = ({ item }) => {
    const themeContext = React.useContext(ThemeContext);
    let bodySchema = null;
    if(item.bodySchema){
        bodySchema = processBodySchema(item.bodySchema);
    }

    return (
        <div className={`doc-row theme-${themeContext}-accent`}>
            <div className="columns is-mobile">
                <div className="column">
                    <div className="has-text-left">
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
            {
                item.pathParams ? (
                    <ParamsTable 
                        sectionName="Path Params"
                        headers={["Name", "Type", "Description", "Required"]}
                        tableItems={item.pathParams}
                    />
                )
                :(null)
            }
            {
                item.queryParams ? (
                    <ParamsTable 
                        sectionName="Query Params"
                        headers={["Name", "Type", "Description", "Required"]}
                        tableItems={item.queryParams}
                    />
                ):(null)
            }
            {
                bodySchema ? (
                    <div className="param-section">
                        <div className="columns is-mobile">
                            <div className="column">
                                <h6 className={`tag theme-${themeContext}-secondary is-size-6`}>Example Request Body</h6>
                            </div>
                        </div>
                        <div className="columns is-mobile">
                            <div className="column is-6-tablet is-12-mobile">
                                <SyntaxHighlighter language="json" style={darcula} className={`theme-${themeContext}-accent-2`}>
                                    {JSON.stringify(bodySchema, null, 2)}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                )
                :(null)
            }
            {
                item.exampleResponse ? (
                    <div className="param-section">
                        <div className="columns is-mobile">
                            <div className="column">
                                <h6 className={`tag theme-${themeContext}-secondary is-size-6`}>Example Response</h6>
                            </div>
                        </div>
                        <div className="columns is-mobile">
                            <div className="column is-6-tablet is-12-mobile">
                                <SyntaxHighlighter language="json" style={darcula} className={`theme-${themeContext}-accent-2`}>
                                    {JSON.stringify(item.exampleResponse, null, 2)}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                )
                :(null)
            }
        </div>
    )
}

const processBodySchema = (schema)=>{
    let formattedObj = {};
    Object.keys(schema).forEach((key)=>{
        let paramType = schema[key].type;
        let formattedValue;
        switch(schema[key].type){
            case "string":
                formattedValue = paramType;
                break;
            
            case "number":
                formattedValue = 0;
                break;
            
            case "array":
                formattedValue = [];
                break;
            
            case "obj":
                formattedValue = {};
                break;
            
            case "boolean":
                formattedValue = true;
                break;
        }

        formattedObj[key] = formattedValue;
    });
    return formattedObj;
}
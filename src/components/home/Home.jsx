import './Home.scss';
import React, {useEffect, useState} from "react";
import { Alert } from "../common/alert/Alert";
import { ConfigContext } from "../../modules/ConfigContext";
import { AlertContext } from "../../modules/AlertContext";
import { ThemeContext } from "../../modules/ThemeContext";
import { DocRow } from '../doc-row/DocRow';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from "@fortawesome/free-solid-svg-icons";

export const Home = ()=>{
    const config = React.useContext(ConfigContext);
    const alertContext = React.useContext(AlertContext);
    const themeContext = React.useContext(ThemeContext);

    const [docs, setDocs] = useState([]);
    let groupedRoutes=[];
    let ungroupedRoutes=[];

    if(docs.length != 0){
        groupedRoutes = extractGroupedRoutes(docs);
        ungroupedRoutes = extractUngroupedRoutes(docs);
    }
    
    useEffect(()=>{
        fetchDocs(config)
        .then((res)=>{
            setDocs(res.response);
        })
        .catch((e)=> {
            console.error(e);
            alertContext.dispatch({
                type: "SHOW_ALERT",
                display: true,
                message: `FAILED FETCHING DOCS`,
                level: "error"
            });
        });
    }, []);

    return (
        <div className="main-container">
            <section className={`section theme-${themeContext}-primary`}>
                <div className="container">
                    {
                        groupedRoutes.length != 0 ? (
                            groupedRoutes.map(group=>
                            processGroupRouteItems(group))                         
                        )
                        :(null)
                    }
                    <div>
                        <h5 className={`tag theme-${themeContext}-secondary is-size-5`}>
                            <span className="tag-icon">
                                <FontAwesomeIcon icon={icons.faMeteor}/>
                            </span>
                            Untagged Routes
                        </h5>
                        {
                            ungroupedRoutes.length != 0 ? (
                                processRouteItems(ungroupedRoutes)
                            )
                            :(null)
                        }
                    </div>

                    <AlertContext.Consumer>
                        {(context) => {
                            if (context.state.display) {
                                return <Alert />
                            }
                        }}
                    </AlertContext.Consumer>
                </div>
            </section>
        </div>
    );
}

const extractGroupedRoutes = (items)=>{
    const groupedRoutes = []
    items.forEach((item)=>{
        if(item.tag){
            groupedRoutes.push(item);
        }
    });
    return groupedRoutes;
}

const extractUngroupedRoutes = (items)=>{
    let routes = [];
    items.forEach((item)=>{
        if(!item.tag){
            routes.push(item);
        }
    });
    return routes;
}

const processGroupRouteItems = (group)=>{
    const themeContext = React.useContext(ThemeContext);
    return(
        <div key={uuidv4()}>
            <h5 className={`tag theme-${themeContext}-secondary is-size-5`}>
                <span className="tag-icon">
                    <FontAwesomeIcon icon={icons.faMeteor}/>
                </span>
                {group.tag} 
            </h5>
            {processRouteItems(group.routes, group.tag)}
        </div>
    )
}

const processRouteItems = (items, tag)=>{
    return items.map((item, i)=>{
        return <DocRow key={uuidv4()} item={item}/>
    })
}

const fetchDocs = async (config)=>{
    try{
        let res = await fetch(`${config.API_SERVICE}/api/docs`);
        return await res.json();
    }
    catch(e){
        throw e;
    }
}
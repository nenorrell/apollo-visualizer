import './Alert.scss';
import React from "react";
import { AlertContext } from '../../../modules/AlertContext';

export const Alert = ()=>{
    const alertContext = React.useContext(AlertContext),
    theme = "dark"
    let themeClass;
    switch(alertContext.state.level){
        case 'success':
            themeClass = `theme-${theme}-success`;
            break;
        case 'error':
            themeClass = `theme-${theme}-danger`;
            break;
        default:
            themeClass = `theme-${theme}-danger`;
            break;
    }
    
    React.useEffect(() => {
        setTimeout(()=>{
            alertContext.dispatch({
                type: "HIDE_ALERT"
            });
        },2000)
      }, [])
    return (
        <div className={`alert-bar ${themeClass}`}>
            <h4 className="is-size-4 has-text-centered">{alertContext.state.message}</h4>
        </div>
    )
}
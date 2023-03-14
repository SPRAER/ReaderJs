import React, {useEffect, useState} from "react";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./Pages/Login";
import {ThemeContext, themes} from "./Store/db/Theme";
import DB from "./Store/db/db";
import {useDispatch, useSelector} from "react-redux";
import {setPlaylist} from "./Store/actions/actions";

const App = () => {

    const {language} = useSelector(state => state.musicReducer);

    const dispatch = useDispatch();
    useEffect(()=>{
        if (language === null || language.includes("any")){
            dispatch(setPlaylist(DB))
        }
        else if (language.includes('Russian')){
            alert("нет доступных на русском")
        } else {
            let x = DB.filter((item)=>(
                item.lang && language.includes(item.lang.toLowerCase())
            ))
            dispatch(setPlaylist(x))
        }
    },[dispatch, language]);

    const [theme,setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={[theme,setTheme]}>
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/home" component={Home}/>
                    </Switch>
                </Router>
            </>
        </ThemeContext.Provider>
    );
}

export default App;
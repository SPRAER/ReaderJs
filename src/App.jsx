import React, {useEffect} from "react";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./Pages/Login";
import {ThemeProvider} from "./Store/db/Theme";
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

    return (
        <ThemeProvider>
            <>
                <Router>
                    <Routes>
                        // Пофиксить баг из-за переноса с 5 на 6 версии
                        <Route path="/" element={<Login/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/home/book" element={<Home/>}/>
                        <Route path="/home/search" element={<Home/>}/>
                        <Route path="/home/profile" element={<Home/>}/>
                        <Route path="/home/redactor" element={<Home/>}/>
                        <Route path="/home/Add" element={<Home/>}/>
                        <Route path="/home/:id/:id" element={<Home/>}/>
                    </Routes>
                </Router>
            </>
        </ThemeProvider>
    );
}

export default App;
import React, {useEffect, useState} from 'react';
import '../../UI/assets/scss/CurrentPlayingLarge.scss';
import {useSelector} from "react-redux";

function CurrentPlayingLarge() {

    const {playing} = useSelector(state => state.musicReducer);
    const [{img,name,author_name},setCurrPlaying] = useState(playing);
    useEffect(()=>{
        setCurrPlaying(playing);
    },[playing]);

    return (
        <div  className={"CurrentPlayingLarge"}>
            <img className={"banner"} src={require("./../../UI/assets/img/"+img)} alt=""/>
            <div className="music-left">
                <div className="wrapper">
                    <img className={"music-cover"} src={require("./../../UI/assets/img/"+img)} alt=""/>
                    <div className="detail">
                        <h3>{name}</h3>
                        <p>{author_name}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CurrentPlayingLarge;

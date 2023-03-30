import React, {useContext, useEffect, useState} from 'react';
import './css/Profile.scss';
import {Avatar} from "@mui/material";
import {useSelector} from "react-redux";
import MangaCard from "../Components/card/MangaCard";
import Container from "../Components/healpers/Container";
import Grade from 'grade-js';
import SideBarOptions from "../Components/sidebar/SideBarOptions";
import {PlaylistPlay} from "@mui/icons-material";
import {ThemeContext} from "../Store/db/Theme";
import {useTranslation} from "react-i18next";

function Profile() {
    const useStyle = useContext(ThemeContext);
    const {t} = useTranslation()

    const {playlists} = useSelector(state => state.musicReducer);
    const [mostPlayed, setMostPlayed] = useState([]);

    function sortByProperty(property) {
        return function (a, b) {
            if (a[property] > b[property])
                return 1;
            else if (a[property] < b[property])
                return -1;

            return 0;
        }
    }

    useEffect(() => {
        setMostPlayed(playlists.sort(sortByProperty("timesPlayed")));
    }, [playlists]);

    useEffect(() => {
        Grade(document.querySelectorAll('.gradient-wrap'))
    });

    return (
        <Container>
            <div className={"Profile"}>
                <div className="top-profile" style={useStyle.sidebarBottom}>
                    <Avatar variant={"rounded"} src={require("../UI/assets/img/avatar2.jpg")}
                            style={{width: "150px", height: "150px"}}>
                        BG
                    </Avatar>
                    <div className="profile-detail">
                        <h3>{t("ProfileName")}</h3>
                        <span className={"profile-playlist"}>
                            <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay}
                                            href={"/home/playlist/instrumental"} title={"Instrumental"}/>
                            <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/electronic"}
                                            title={"Electronic"}/>
                        </span>
                    </div>
                </div>
                <div className="bottom-profile">
                    <div>
                        <h3>Часто посещаемые</h3>
                        <div className="most-played">
                            {
                                mostPlayed.map((item, index) => (
                                    index <= 4 && <MangaCard key={item.id} music={item}/>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
}

export default Profile;

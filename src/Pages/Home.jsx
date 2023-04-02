import React, {useContext, useEffect, useState} from "react";
import './css/Home.scss';
import Navigation from "../Components/navigation/Navigation";
import MobileTopNavigation from "../Components/navigation/MobileTopNavigation";
import SideBar from "../Components/sidebar/SideBar";
import FooterMusicPlayer from "../Components/footer/FooterMusicPlayer";
import BottomNavigationMobile from "../Components/navigation/BottomNavigationMobile";
import MangaCardContainer from "../Components/card/MangaCardContainer";
import {useSelector} from "react-redux";
import {ThemeContext} from "../Store/db/Theme";
import Profile from "./Profile";
import AddMusic from "../Components/card/AddManga";
import FooterSelectMusic from "../Components/footer/FooterSelectMusic";
import CurrentPlayingLarge from "../Components/music/CurrentPlayingLarge";
import Book from "./Book";
import Playlist from "../Components/playlist/Playlist";
import {Skeleton} from "@mui/material";
import cn from 'classnames';

function getCurrPage(pathName) {
    switch (pathName) {
        case "/home":
            return <MangaCardContainer/>
        case "/home/profile":
            return <Profile/>
        case "/home/redactor":
            return <AddMusic/>
        case "/home/book":
            return <Book/>
        default:
            if (pathName.startsWith("/home/playlist/")) {
                return <Playlist/>
            }
            return null
    }
}

const Home = () => {

    const [screenSize, setScreenSize] = useState(undefined);
    const [currMusic, setCurrMusic] = useState(null);
    const [Page, setCurrPage] = useState(<MangaCardContainer/>);

    let pathname = window.location.pathname;

    useEffect(() => {
        setCurrPage(getCurrPage(pathname))
    }, [pathname]);

    window.addEventListener("resize", handleResize);

    function handleResize() {
        setScreenSize(window.innerWidth);
    }

    useEffect(() => {
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    });

    const {isDark} = useContext(ThemeContext);
    const {playing, bannerOpen} = useSelector(state => state.musicReducer);


    useEffect(() => {
        setCurrMusic(playing)
    }, [playing])

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true)
    }, []);


    return (
        <div className={cn("home-container", {
            Dark: isDark === true
        })}>
            {
                !loaded ?
                    <div className="Home-skeleton">
                        <Skeleton animation={"wave"} variant={"rect"} height={"100vh"}/>
                    </div>
                    :
                    <>
                        {
                            screenSize <= 970 ?
                                <MobileTopNavigation/> :
                                <Navigation/>
                        }
                        <section className={"home-music-container"}>
                            <div className="sidebar-home">
                                <SideBar/>
                            </div>
                            <div className="main-home">
                                {
                                    Page
                                }
                            </div>
                        </section>
                        {
                            bannerOpen
                            &&
                            <section className="current-large-banner">
                                <CurrentPlayingLarge/>
                            </section>
                        }
                        <React.Fragment>
                            {
                                currMusic
                                    ?
                                    <FooterMusicPlayer music={currMusic}/>
                                    :
                                    <FooterSelectMusic/>
                            }
                            {
                                screenSize <= 970 && <BottomNavigationMobile/>
                            }
                        </React.Fragment>
                    </>
            }
        </div>
    );
}

export default Home;
import React from 'react';
import '../../UI/assets/scss/Playlist.scss';
import {useSelector} from "react-redux";
import MangaCard from "../card/MangaCard";
import Container from "../healpers/Container";

const Playlist = () => {
    const typeOfPlaylist = window.location.pathname.substring(15);
    const {playlists} = useSelector(state=>state.musicReducer);
    return (
        <Container>
            <div  className={"Playlist"}>
                <h3>Ваш {typeOfPlaylist} плейлист</h3>
                <div className="Playlist-container">
                    {
                        playlists.map((item)=>(
                            item.type === typeOfPlaylist &&
                            <MangaCard key={item.id} music={item}/>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
}

export default Playlist;
import React, {useState} from "react"
import '../../UI/assets/scss/MangaCardContainer.scss';
import MangaCard from "./MangaCard";
import {useSelector} from "react-redux";
import Container from "../healpers/Container";

const MangaCardContainer = () => {
    const {playlists} = useSelector(state => state.musicReducer);

    return (
        <Container>
            <div className={"music-card-container"}>
                {
                    playlists.map(item => (
                        <MangaCard key={item.id} music={item} />
                    ))
                }
            </div>

        </Container>
    );
}

export default MangaCardContainer;

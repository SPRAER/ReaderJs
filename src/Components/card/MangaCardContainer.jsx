import React, {useState} from "react"
import '../../UI/assets/scss/MusicCardContainer.scss';
import MangaCard from "./MangaCard";
import {useSelector} from "react-redux";
import Container from "../healpers/Container";
import Modal from "../modal/Modal";

function MangaCardContainer() {
    const {playlists} = useSelector(state => state.musicReducer);
    const [ModalActive, setModalActive] = useState(false);

    return (
        <Container>
            <div className={"music-card-container"}>
                {
                    playlists.map(item => (
                        <MangaCard key={item.id} music={item}/>
                    ))
                }
            </div>
            <Modal acrive={ModalActive} setActive={setModalActive} />
            <button className="MangaButton" onClick={() => setModalActive(true)}>Открыть мангу</button>
        </Container>
    );
}

export default MangaCardContainer;

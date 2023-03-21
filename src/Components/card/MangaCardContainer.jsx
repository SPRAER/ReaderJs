import React, {useState} from "react"
import '../../UI/assets/scss/MusicCardContainer.scss';
import MangaCard from "./MangaCard";
import {useSelector} from "react-redux";
import Container from "../healpers/Container";
import ChapterSelection from "../booking/ChapterSection/ChapterSection";
import Description from "../booking/description/Description";
import Booking from "../booking/booking";

const openBook = (book) => {
    switch (book) {
        case "booking":
            return <Booking/>
        case "description":
            return <Description/>
        case "chapterSelection":
            return <ChapterSelection/>
        default:
            return <Description/>
    }
}

const MangaCardContainer = () => {
    const {playlists} = useSelector(state => state.musicReducer);

    const [ModalBook, setModalBook] = useState('Description');
    const [active, setModalActive] = useState(false);

    return (
        <Container>
            <div className={"music-card-container"}>
                {
                    playlists.map(item => (
                        <MangaCard key={item.id} music={item}/>
                    ))
                }
            </div>

                {
                    openBook(ModalBook)
                }

            <button className="MangaButton" onClick={() => setModalActive(true)}>Открыть мангу</button>
        </Container>
    );
}

export default MangaCardContainer;

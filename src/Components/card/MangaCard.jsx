import React, {useEffect, useState} from 'react';
import '../../UI/assets/scss/MangaCard.scss';
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import {useDispatch} from "react-redux";
import {increaseTimesPlayed, setCurrentPlaying} from "../../Store/actions/actions";
import Name from "../healpers/Name";
import {Skeleton} from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "../modal/Modal";
import Booking from "../booking/booking";
import Description from "../booking/description/Description";
import ChapterSelection from "../booking/ChapterSection/ChapterSection";

function MangaCard(props) {
    const {name, img, author_name} = props.music;

    const [isHovered, setHovered] = useState(false);

    function handleResponse() {
        setHovered(!isHovered);
    }

    const dispatch = useDispatch();

    function handlePlay() {
        dispatch(setCurrentPlaying(props.music))
        dispatch(increaseTimesPlayed(props.music.id));
    }

    let LinkinghandlePlay = () => {
        handlePlay()
        
    }

    const [loaded,setLoaded] = useState(false);
    //const [ModalBook, setModalBook] = useState('chapterSelection');
    const [ModalActive, setModalActive] = useState(false);

    // const openBook = (book) => {
    //     switch (book) {
    //         case "booking":
    //             return <Booking mBook={ModalBook} setMBook={setModalBook} />
    //         case "description":
    //             return <Description/>
    //         case "chapterSelection":
    //             return <ChapterSelection/>
    //         default:
    //             return <Description/>
    //     }
    // }

    const ModalAndHandlePlay = () => {
        setModalActive(true)
        handlePlay()
    }

    useEffect(()=>{
        setLoaded(true)
    },[]);

    return (
        <div className={"music-card"}>
            {
                !loaded ?
                <div className={"Skeleton-top"}>
                    <Skeleton variant="rect" width={210} height={210} />
                    <Box pt={0.5}>
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </div>
                    :
                    <>
                        <div onClick={ModalAndHandlePlay}  className={"music-card-cover"} onMouseOver={handleResponse}>
                            <img src={require("./../../UI/assets/img/" + img)} alt={name}/>
                            <div className="play-circle">
                                <PlayCircleFilledWhiteIcon/>
                            </div>
                        </div>
                        <React.Fragment>
                            <Name name={name} className={"song-name"} length={name.length}/>
                            <Name name={author_name} className={"author-name"} length={author_name.length}/>
                        </React.Fragment>
                    </>
            }

            <Modal acrive={ModalActive} setActive={setModalActive}>
                {
                    <Booking />
                }
            </Modal>

        </div>
    );
}

export default MangaCard;
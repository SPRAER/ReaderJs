import React, {useState} from "react";
import Container from "../Components/healpers/Container";
import HTMLFlipBook from 'react-pageflip';
import './css/Book.scss';
// import Modal from "../Components/modal/Modal";

const mangalist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

const Book = () => {

    const [ModalActive, setModalActive] = useState(false);

    return (
        <Container>
            <div className="main-row-manga">
                {/*<HTMLFlipBook width={350} height={495}>*/}
                {/*    {*/}
                {/*        mangalist.map(item => (*/}
                {/*            <div className="demoPage">*/}
                {/*                <img src={require("./../UI/assets/img/chainsawman/" + item + '.jpg')} alt={item} className="BookIMG"/>*/}
                {/*            </div>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</HTMLFlipBook>*/}
            </div>

            {/*<Modal acrive={ModalActive} setActive={setModalActive} />*/}
            <button className="MangaButton" onClick={() => setModalActive(true)}>Открыть мангу</button>
        </Container>
    );
};

export default Book;
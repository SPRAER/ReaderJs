import React from 'react';
import HTMLFlipBook from "react-pageflip";
import './../../UI/assets/scss/Modale.scss'

const mangalist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

const Modal = ({acrive, setActive}) => {
    return (
        <div className={acrive ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={acrive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <HTMLFlipBook width={385} height={654}>
                    {
                        mangalist.map(item => (
                            <div className="demoPage">
                                <img src={require("./../../UI/assets/img/chainsawman/" + item + '.jpg')} alt={item} className="BookIMG"/>
                            </div>
                        ))
                    }
                </HTMLFlipBook>
            </div>
        </div>
    );
};

export default Modal;
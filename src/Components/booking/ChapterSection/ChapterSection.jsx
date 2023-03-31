import React, {useContext, useState} from 'react';
import './ChapterSelection.scss';
import Button from "@mui/material/Button";
import Booking from "../booking";
import {ThemeContext} from "../../../Store/db/Theme";

const ChapterSelection = ({acrive, setActive}) => {

    const [ModalActive, setModalActive] = useState(false);
    const useStyle = useContext(ThemeContext);
    const mangalist2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

    return (
        <>
            <div className={acrive ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={acrive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()} style={useStyle.component}>
                    <div className="PageFlex">
                        {
                            mangalist2.map(item => (
                                <div className="demoPage">
                                    <Button className="PageButton" onClick={() => setModalActive(true)}
                                            style={{background: '#2196F3', color: '#fff'}}>
                                        Глава {item}
                                    </Button>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

            <Booking acrive={ModalActive} setActive={setModalActive} />
        </>
    );
};

export default ChapterSelection;
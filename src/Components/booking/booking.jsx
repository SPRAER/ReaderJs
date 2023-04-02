import React, {useContext, useEffect, useState} from 'react';
import HTMLFlipBook from "react-pageflip";
import './../../UI/assets/scss/Modale.scss';
import {ThemeContext} from "../../Store/db/Theme";
import cn from "classnames";

const Booking = ({acrive, setActive}) => {

    const [screenSize, setScreenSize] = useState(undefined);
    const {isDark} = useContext(ThemeContext);
    const mangalist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

    window.addEventListener("resize", handleResize);

    function handleResize() {
        setScreenSize(window.innerWidth);
    }

    useEffect(() => {
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    });

    return (

    <div className={cn('modal', {active: acrive === true})} onClick={() => setActive(false)}>
        <div className={cn('modal__content component',
            {Dark: isDark === true},
            {active: acrive === true})}
             onClick={e => e.stopPropagation()}>
            {
                screenSize <= 970 ?
                    <HTMLFlipBook width={307} height={523}>
                        {
                            mangalist.map(item => (
                                <div className="demoPage">
                                    <img src={require("./../../UI/assets/img/chainsawman/" + item + '.jpg')} alt={item}
                                         className="mobileBookIMG"/>
                                </div>
                            ))
                        }
                    </HTMLFlipBook> :
                <HTMLFlipBook width={385} height={654}>
                {
                    mangalist.map(item => (
                        <div className="demoPage">
                            <img src={require("./../../UI/assets/img/chainsawman/" + item + '.jpg')} alt={item}
                                 className="BookIMG"/>
                        </div>
                    ))
                }
                </HTMLFlipBook>
            }
        </div>
    </div>
    );
};

export default Booking;
import React, {useContext} from 'react';
import './../../UI/assets/scss/Modale.scss';
import {ThemeContext} from "../../Store/db/Theme";

const Modal = ({acrive, setActive, children}) => {

    const useStyle = useContext(ThemeContext);

    return (
        <div className={acrive ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={acrive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()} style={useStyle.component}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
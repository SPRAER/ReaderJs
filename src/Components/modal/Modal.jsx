import React, {useContext} from 'react';
import './../../UI/assets/scss/Modale.scss'

const Modal = ({acrive, setActive, children}) => {

    return (
        <div className={acrive ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={acrive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
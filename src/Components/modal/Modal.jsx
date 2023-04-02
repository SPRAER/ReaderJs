import React, {useContext} from 'react';
import './../../UI/assets/scss/Modale.scss';
import {ThemeContext} from "../../Store/db/Theme";
import cn from "classnames";

const Modal = ({acrive, setActive, children}) => {

    const {isDark} = useContext(ThemeContext);

    return (
        <div className={cn('modal', {active: acrive === true})} onClick={() => setActive(false)}>
            <div className={cn('modal__content component',
                {Dark: isDark === true},
                {active: acrive === true})}
                 onClick={e => e.stopPropagation()}>

                {children}
            </div>
        </div>
    );
};

export default Modal;
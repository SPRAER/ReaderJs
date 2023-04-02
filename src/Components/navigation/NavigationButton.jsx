import React, {useContext} from 'react';
import '../../UI/assets/scss/NavigationButton.scss';
import {ThemeContext} from "../../Store/db/Theme";
import {Link} from "react-router-dom";
import cn from "classnames";

function NavigationButton(props) {
    const {isDark} = useContext(ThemeContext);
    return (
        <React.Fragment>
            <Link to={props.href} className={cn('Nav-btn outlined', {Dark: isDark === true})} >
                {props.name}
            </Link>
        </React.Fragment>
    );
}

export default NavigationButton;
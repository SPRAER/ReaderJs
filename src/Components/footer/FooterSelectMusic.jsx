import React, {useContext} from 'react';
import '../../UI/assets/scss/FooterSelectMusic.scss';
import {ThemeContext} from "../../Store/db/Theme";
import {Link} from "react-router-dom";

function FooterSelectMusic() {
    const useStyle = useContext(ThemeContext);

    return (
        <div style={useStyle.subTheme} className={"Footer_Select_Music"}>
            <Link to={"/home"}>
                Выберете мангу чтобы продолжить
            </Link>
        </div>
    );
}

export default FooterSelectMusic;
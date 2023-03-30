import React, {useContext} from 'react';
import '../../UI/assets/scss/FooterSelectMusic.scss';
import {ThemeContext} from "../../Store/db/Theme";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function FooterSelectMusic() {
    const useStyle = useContext(ThemeContext);
    const {t} = useTranslation()

    return (
        <div style={useStyle.subTheme} className={"Footer_Select_Music"}>
            <Link to={"/home"}>
                {t("ChooseAMangaToContinue")}
            </Link>
        </div>
    );
}

export default FooterSelectMusic;
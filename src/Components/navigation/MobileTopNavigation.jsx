import React, {useContext, useState} from "react";
import SearchBar from "../searchbar/SearchBar";
import '../../UI/assets/scss/MobTopNav.scss';
import {Button} from "@mui/material";
import {Brightness4} from "@mui/icons-material";
import {ThemeContext} from "../../Store/db/Theme";
import {useTranslation} from "react-i18next";

const MobileTopNavigation = () => {

    const [switchLanguage, setSwitchLanguage] = useState(false);

    const useStyle = useContext(ThemeContext);
    const {t, i18n} = useTranslation();

    const changeLanguage = () => {
        if (switchLanguage === true) {
            i18n.changeLanguage('ru');
            setSwitchLanguage(false)
        } else {
            i18n.changeLanguage('en');
            setSwitchLanguage(true)
        }
    }

    return (
        <nav className="mob-top-navigation">
            <Button className={"Dropdown-btn mobile-theme"} onClick={() => null} style={useStyle.component} endIcon={<Brightness4/>}>
                <div className="wrapper">
                    <p>{t("theme")}</p>
                </div>
            </Button>

            <SearchBar/>

            <Button className={"Dropdown-btn"} onClick={() => changeLanguage()} style={useStyle.component}>
                <div className="wrapper">
                    <p>ENG / RU</p>
                </div>
            </Button>
        </nav>
    );
}

export default MobileTopNavigation;
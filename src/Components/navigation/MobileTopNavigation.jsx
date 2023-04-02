import React, {useContext, useState} from "react";
import SearchBar from "../searchbar/SearchBar";
import '../../UI/assets/scss/MobTopNav.scss';
import {Button} from "@mui/material";
import {Brightness4} from "@mui/icons-material";
import {ThemeContext} from "../../Store/db/Theme";
import {useTranslation} from "react-i18next";
import cn from "classnames";

const MobileTopNavigation = () => {

    const [switchLanguage, setSwitchLanguage] = useState(false);

    const {isDark, setIsDark} = useContext(ThemeContext);
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
            <Button className={cn('Dropdown-btn mobile-theme component', {Dark: isDark === true})} onClick={() => setIsDark(!isDark)} endIcon={<Brightness4/>}>
                <div className="wrapper">
                    <p>{t("theme")}</p>
                </div>
            </Button>

            <SearchBar/>

            <Button className={cn('Dropdown-btn component', {Dark: isDark === true})} onClick={() => changeLanguage()}>
                <div className="wrapper">
                    <p>ENG / RU</p>
                </div>
            </Button>
        </nav>
    );
}

export default MobileTopNavigation;
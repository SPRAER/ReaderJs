import React, {useContext, useState} from "react";
import '../../UI/assets/scss/Navigation.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DropDownLanguageList from "../langlist/DropDownLanguageList";
import SearchBar from "../searchbar/SearchBar";
import {Avatar, Button} from "@mui/material";
import {ThemeContext} from "../../Store/db/Theme";
import {Brightness4, GTranslate} from "@mui/icons-material";
import {useTranslation} from "react-i18next";
import cn from 'classnames';

function Navigation() {
    const [isLanguageListOpen, setLangList] = useState(false);
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
        <nav className={cn('navigation', {Dark: isDark === true})}>
            <div className="profile">
                <Button className={"Dropdown-btn"}
                        startIcon={<Avatar variant={"rounded"} style={{width:'50px',height:'50px',padding:'2px', color: '#000', borderRadius: '10px'}} src={require("./../../UI/assets/img/avatar2.jpg")}>BG</Avatar>}>
                    <p className={cn('component', {
                        Dark: isDark === true
                    })} >{t("ProfileName")}</p>
                </Button>
            </div>

            <Button className={cn('Dropdown-btn component', {Dark: isDark === true})} onClick={() => setIsDark(!isDark)} endIcon={<Brightness4/>}>
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

            <div className={"language"} onClick={() => setLangList(!isLanguageListOpen)}>
                <Button className={"Dropdown-btn"} startIcon={<GTranslate/>}
                        endIcon={isLanguageListOpen ? <ExpandMoreIcon/> : <ExpandLessIcon/>}>
                    <div className="wrapper">
                        <p className={cn('LangText component', {Dark: isDark === true})}>{t("SortingByLanguage")}</p>
                    </div>
                </Button>
                {
                    isLanguageListOpen
                    &&
                    <DropDownLanguageList/>
                }
            </div>
        </nav>
    );
}

export default Navigation;
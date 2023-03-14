import React, {useContext, useState} from "react";
import '../../UI/assets/scss/Navigation.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DropDownLanguageList from "../langlist/DropDownLanguageList";
import SearchBar from "../SearchBar";
import {Avatar, Button} from "@material-ui/core";
import {ThemeContext} from "../../Store/db/Theme";
import {Brightness4, GTranslate} from "@material-ui/icons";

function Navigation() {

    const [isLanguageListOpen, setLangList] = useState(false);
    const [isOpenProfile, setOpenProfile] = useState(false);


    function handleOpenLanguageList() {
        if (isOpenProfile === true)
            setOpenProfile(!isOpenProfile);
        setLangList(!isLanguageListOpen);
    }

    const useStyle = useContext(ThemeContext);
    return (
        <nav style={useStyle.component}>
            <div className="profile">
                <Button className={"Dropdown-btn"}
                        startIcon={<Avatar variant={"rounded"} style={{width:'50px',height:'50px',padding:'2px'}} src={require("./../../UI/assets/img/avatar2.jpg")}>BG</Avatar>}>
                    <p>Bogdan Gogolev</p>
                </Button>
            </div>

            <Button className={"Dropdown-btn"} onClick={() => null} style={{margin: "5px 15px"}} endIcon={<Brightness4/>}>
                <div className="wrapper">
                    <p>Тема</p>
                </div>
            </Button>

            <SearchBar/>
            <div className={"language"} onClick={handleOpenLanguageList}>
                <Button className={"Dropdown-btn"} startIcon={<GTranslate/>}
                        endIcon={isLanguageListOpen ? <ExpandMoreIcon/> : <ExpandLessIcon/>}>
                    <div className="wrapper">
                        <p>Сортировка по языкам</p>
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
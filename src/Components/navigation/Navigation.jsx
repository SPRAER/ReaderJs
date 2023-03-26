import React, {useContext, useState} from "react";
import '../../UI/assets/scss/Navigation.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DropDownLanguageList from "../langlist/DropDownLanguageList";
import SearchBar from "../searchbar/SearchBar";
import {Avatar, Button} from "@mui/material";
import {ThemeContext} from "../../Store/db/Theme";
import {Brightness4, GTranslate} from "@mui/icons-material";

function Navigation() {
    const [isLanguageListOpen, setLangList] = useState(false);

    const useStyle = useContext(ThemeContext);
    return (
        <nav style={useStyle.sidebarBottom}>
            <div className="profile">
                <Button className={"Dropdown-btn"}
                        startIcon={<Avatar variant={"rounded"} style={{width:'50px',height:'50px',padding:'2px', color: '#000', borderRadius: '10px'}} src={require("./../../UI/assets/img/avatar2.jpg")}>BG</Avatar>}>
                    <p style={useStyle.component}>Bogdan Gogolev</p>
                </Button>
            </div>

            <Button className={"Dropdown-btn"} onClick={() => null} style={useStyle.component} endIcon={<Brightness4/>}>
                <div className="wrapper">
                    <p>Тема</p>
                </div>
            </Button>

            <SearchBar/>

            <Button className={"Dropdown-btn"} onClick={() => null} style={useStyle.component}>
                <div className="wrapper">
                    <p>ENG / RU</p>
                </div>
            </Button>

            <div className={"language"} onClick={() => setLangList(!isLanguageListOpen)}>
                <Button className={"Dropdown-btn"} startIcon={<GTranslate/>}
                        endIcon={isLanguageListOpen ? <ExpandMoreIcon/> : <ExpandLessIcon/>}>
                    <div className="wrapper">
                        <p style={useStyle.component}>Сортировка по языкам</p>
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
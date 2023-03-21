import React, {useContext, useState} from "react";
import '../../UI/assets/scss/DropDown.scss';
import Button from "@mui/material/Button";
import LangList from "./LangList";
import {ThemeContext} from "../../Store/db/Theme";
import {useDispatch} from "react-redux";
import {setMusicLang} from "../../Store/actions/actions";

const DropDownLanguageList = () => {

    const useStyle = useContext(ThemeContext);

    const listOfLanguage = [
        "Any",
        "Russian",
        "English",
    ];
    const [selectedList, setSelectedList] = useState({
        "Any": false,
        "Russian": false,
        "English": false,
    });
    const handleSelected = (val, selected) => {
        setSelectedList(prevState => {
            return {
                ...prevState,
                [val]: selected
            };
        });
    };
    const dispatch = useDispatch();
    const handleLangSelect = (e) => {
        e.preventDefault();
        let list = [];
        for (let i in selectedList) {
            if (selectedList[i] === true)
                list.push(i.toLowerCase());
        }
        dispatch(setMusicLang(list));
    };


    return (
        <div style={useStyle.component} className="dropdown">
            <div className="dropdown-head">
                <p>Выберите язык для чтения</p>
            </div>
            <div className={"lang-list"}>
                {listOfLanguage.map((item) => {
                    return (
                        <LangList onClick={handleSelected} key={item} item={item}/>
                    );
                })}
            </div>
            <div className={"button-div"}>
                <Button onClick={handleLangSelect} style={useStyle.button.contained}>
                    Выбрать
                </Button>   
            </div>
        </div>
    );
}
export default DropDownLanguageList;